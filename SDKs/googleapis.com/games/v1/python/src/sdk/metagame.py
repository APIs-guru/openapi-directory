import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Metagame:
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

    
    def games_metagame_get_metagame_config(self, request: operations.GamesMetagameGetMetagameConfigRequest) -> operations.GamesMetagameGetMetagameConfigResponse:
        r"""Return the metagame configuration data for the calling application.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1/metagameConfig"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesMetagameGetMetagameConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MetagameConfig])
                res.metagame_config = out

        return res

    
    def games_metagame_list_categories_by_player(self, request: operations.GamesMetagameListCategoriesByPlayerRequest) -> operations.GamesMetagameListCategoriesByPlayerResponse:
        r"""List play data aggregated per category for the player corresponding to `playerId`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1/players/{playerId}/categories/{collection}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesMetagameListCategoriesByPlayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CategoryListResponse])
                res.category_list_response = out

        return res

    