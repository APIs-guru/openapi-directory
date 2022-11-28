import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Requests:
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

    
    def verify_request(self, request: operations.VerifyRequestRequest) -> operations.VerifyRequestResponse:
        r"""Request a Verification
        Use Verify request to generate and send a PIN to your user:
        
        1. Create a request to send a verification code to your user.
        
        2. Check the `status` field in the response to ensure that your request was successful (zero is success).
        
        3. Use the `request_id` field in the response for the Verify check.
        
        *Note that this endpoint is available by `GET` request as well as `POST`.*
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{format}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VerifyRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.verify_request_200_application_json_one_of = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    