import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Sdfdownloadtasks:
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

    
    def displayvideo_sdfdownloadtasks_operations_get(self, request: operations.DisplayvideoSdfdownloadtasksOperationsGetRequest) -> operations.DisplayvideoSdfdownloadtasksOperationsGetResponse:
        r"""Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1dev/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoSdfdownloadtasksOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    