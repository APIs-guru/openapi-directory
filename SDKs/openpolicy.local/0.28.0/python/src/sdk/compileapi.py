import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CompileAPI:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def post_compile(self, request: operations.PostCompileRequest) -> operations.PostCompileResponse:
        r"""Compile
        This API endpoint allows you to partially evaluate Rego queries and obtain a simplified version of the policy. The example below assumes that OPA has been given the following policy (use `PUT /v1/policies/{path}`):
        
        ```yaml
        package example
        allow {
          input.subject.clearance_level >= data.reports[_].clearance_level
        }
        ```
        Compile API **request body** so that it contain the following fields:
        
        | Field | Type | Required | Description |
        | --- | --- | --- | --- |
        | `query` | `string` | Yes | The query to partially evaluate and compile. |
        | `input` | `any` | No | The input document to use during partial evaluation (default: undefined). |
        | `unknowns` | `array[string]` | No | The terms to treat as unknown during partial evaluation (default: `[\"input\"]`]). |
        
        For example:
        
        ```json
        {
          \"query\": \"data.example.allow == true\",
          \"input\": {
            \"subject\": {
              \"clearance_level\": 4
            }
          },
          \"unknowns\": [
            \"data.reports\"
            ]
        }
        ```
        ### Partial evaluation
        In some cases, the result of partial valuation is a conclusive, unconditional answer. See [the guidance](https://www.openpolicyagent.org/docs/latest/rest-api/#unconditional-results-from-partial-evaluation) for details.
        https://blog.openpolicyagent.org/partial-evaluation-162750eaf422 - Partial evaluation article
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/compile"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCompile200ApplicationJSON])
                res.post_compile_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out

        return res

    