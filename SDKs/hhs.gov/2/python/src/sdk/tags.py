import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Tags:
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

    
    def get_resources_tags_format_(self, request: operations.GetResourcesTagsFormatRequest) -> operations.GetResourcesTagsFormatResponse:
        r"""Get Tags
        List of Tags
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/tags.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesTagsFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TagMarshallerWrapped]])
                res.tag_marshaller_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_tags_id_format_(self, request: operations.GetResourcesTagsIDFormatRequest) -> operations.GetResourcesTagsIDFormatResponse:
        r"""Get Tag by ID
        Information about a specific tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/tags/{id}.{format}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesTagsIDFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TagMarshallerWrapped]])
                res.tag_marshaller_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_tags_id_media_format_(self, request: operations.GetResourcesTagsIDMediaFormatRequest) -> operations.GetResourcesTagsIDMediaFormatResponse:
        r"""Get MediaItems for Tag
        MediaItem
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/tags/{id}/media.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesTagsIDMediaFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MediaItemWrapped]])
                res.media_item_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_tags_id_related_format_(self, request: operations.GetResourcesTagsIDRelatedFormatRequest) -> operations.GetResourcesTagsIDRelatedFormatResponse:
        r"""Get related Tags by ID
        Information about related tags to a specific tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/tags/{id}/related.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesTagsIDRelatedFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TagMarshallerWrapped]])
                res.tag_marshaller_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_tags_id_syndicate_format_(self, request: operations.GetResourcesTagsIDSyndicateFormatRequest) -> operations.GetResourcesTagsIDSyndicateFormatResponse:
        r"""Get MediaItems for Tag
        MediaItem
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/tags/{id}/syndicate.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesTagsIDSyndicateFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_resources_tags_id_syndicate_format_200_application_json_string = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_tags_tag_languages_format_(self, request: operations.GetResourcesTagsTagLanguagesFormatRequest) -> operations.GetResourcesTagsTagLanguagesFormatResponse:
        r"""Get TagLanguages
        List of Tag Languages
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/tags/tagLanguages.{format}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesTagsTagLanguagesFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TagLanguageMarshallerWrapped]])
                res.tag_language_marshaller_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_tags_tag_types_format_(self, request: operations.GetResourcesTagsTagTypesFormatRequest) -> operations.GetResourcesTagsTagTypesFormatResponse:
        r"""Get MediaItems for Tag
        List of Types
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/tags/tagTypes.{format}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesTagsTagTypesFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TagTypeMarshallerWrapped]])
                res.tag_type_marshaller_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    