import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Sources:
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

    
    def get_resources_sources_id_json(self, request: operations.GetResourcesSourcesIDJSONRequest) -> operations.GetResourcesSourcesIDJSONResponse:
        r"""Get Source by ID
        Information about a specific source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/sources/{id}.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesSourcesIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SourceWrapped]])
                res.source_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_sources_id_syndicate_format_(self, request: operations.GetResourcesSourcesIDSyndicateFormatRequest) -> operations.GetResourcesSourcesIDSyndicateFormatResponse:
        r"""Get MediaItems for Source
        MediaItem
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/sources/{id}/syndicate.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesSourcesIDSyndicateFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MediaItemWrapped]])
                res.media_item_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_sources_json(self, request: operations.GetResourcesSourcesJSONRequest) -> operations.GetResourcesSourcesJSONResponse:
        r"""Get Sources
        Source Listings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/resources/sources.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesSourcesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SourceWrapped]])
                res.source_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    