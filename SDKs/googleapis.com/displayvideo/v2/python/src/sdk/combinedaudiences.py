import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CombinedAudiences:
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

    
    def displayvideo_combined_audiences_get(self, request: operations.DisplayvideoCombinedAudiencesGetRequest) -> operations.DisplayvideoCombinedAudiencesGetResponse:
        r"""Gets a combined audience.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/combinedAudiences/{combinedAudienceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCombinedAudiencesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CombinedAudience])
                res.combined_audience = out

        return res

    
    def displayvideo_combined_audiences_list(self, request: operations.DisplayvideoCombinedAudiencesListRequest) -> operations.DisplayvideoCombinedAudiencesListResponse:
        r"""Lists combined audiences. The order is defined by the order_by parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/combinedAudiences"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCombinedAudiencesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCombinedAudiencesResponse])
                res.list_combined_audiences_response = out

        return res

    