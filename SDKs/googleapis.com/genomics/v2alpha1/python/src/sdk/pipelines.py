import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Pipelines:
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

    
    def genomics_pipelines_run(self, request: operations.GenomicsPipelinesRunRequest) -> operations.GenomicsPipelinesRunResponse:
        r"""Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2alpha1/pipelines:run"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenomicsPipelinesRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    