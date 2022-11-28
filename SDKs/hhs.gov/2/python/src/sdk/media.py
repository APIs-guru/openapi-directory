import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Media:
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

    
    def get_resources_media_featured_json(self, request: operations.GetResourcesMediaFeaturedJSONRequest) -> operations.GetResourcesMediaFeaturedJSONResponse:
        r"""Get the list of featured content in the syndication system
        Get the list of featured content in the syndication system
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/resources/media/featured.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesMediaFeaturedJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MediaItem]])
                res.media_items = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_media_id_content(self, request: operations.GetResourcesMediaIDContentRequest) -> operations.GetResourcesMediaIDContentResponse:
        r"""Get content for MediaItem
        The actual media content (html, image, etc...)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/media/{id}/content", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesMediaIDContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_resources_media_id_content_200_application_json_string = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_media_id_embed_json(self, request: operations.GetResourcesMediaIDEmbedJSONRequest) -> operations.GetResourcesMediaIDEmbedJSONResponse:
        r"""Get embed code for MediaItem
        Get the javascript or iframe embed code for this item (to embed it on a web page).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/media/{id}/embed.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesMediaIDEmbedJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_resources_media_id_embed_json_200_application_json_string = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_media_id_json(self, request: operations.GetResourcesMediaIDJSONRequest) -> operations.GetResourcesMediaIDJSONResponse:
        r"""Get MediaItem by ID
        Information about a specific media item
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/media/{id}.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesMediaIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MediaItemWrapped]])
                res.media_item_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_media_id_preview_jpg(self, request: operations.GetResourcesMediaIDPreviewJpgRequest) -> operations.GetResourcesMediaIDPreviewJpgResponse:
        r"""Get Tag by ID
        Get the jpg preview of the content item where applicable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/media/{id}/preview.jpg", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesMediaIDPreviewJpgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_resources_media_id_preview_jpg_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_media_id_related_media_format_(self, request: operations.GetResourcesMediaIDRelatedMediaFormatRequest) -> operations.GetResourcesMediaIDRelatedMediaFormatResponse:
        r"""Get related MediaItems by ID
        Get the media related to the current media item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/media/{id}/relatedMedia.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesMediaIDRelatedMediaFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MediaItemWrapped]])
                res.media_item_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_media_id_syndicate_format_(self, request: operations.GetResourcesMediaIDSyndicateFormatRequest) -> operations.GetResourcesMediaIDSyndicateFormatResponse:
        r"""Get syndicated content for MediaItem
        Get syndicated content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/media/{id}/syndicate.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesMediaIDSyndicateFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyndicateMarshallerWrapped])
                res.syndicate_marshaller_wrapped = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_media_id_thumbnail_jpg(self, request: operations.GetResourcesMediaIDThumbnailJpgRequest) -> operations.GetResourcesMediaIDThumbnailJpgResponse:
        r"""Get JPG thumbnail for MediaItem
        Get the jpg thumbnail of the content item where applicable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/media/{id}/thumbnail.jpg", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesMediaIDThumbnailJpgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_resources_media_id_thumbnail_jpg_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_media_id_youtube_meta_data_json(self, request: operations.GetResourcesMediaIDYoutubeMetaDataJSONRequest) -> operations.GetResourcesMediaIDYoutubeMetaDataJSONResponse:
        r"""Get Youtube metadata for MediaItem
        Youtube meta-data for a video item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/media/{id}/youtubeMetaData.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesMediaIDYoutubeMetaDataJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetResourcesMediaIDYoutubeMetaDataJSON200ApplicationJSON])
                res.get_resources_media_id_youtube_meta_data_json_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_media_json(self, request: operations.GetResourcesMediaJSONRequest) -> operations.GetResourcesMediaJSONResponse:
        r"""Get MediaItems
        Media Items Listings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/resources/media.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesMediaJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MediaItemWrapped]])
                res.media_item_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_media_most_popular_media_format_(self, request: operations.GetResourcesMediaMostPopularMediaFormatRequest) -> operations.GetResourcesMediaMostPopularMediaFormatResponse:
        r"""Get MediaItems by popularity
        Get the media with the highest ratings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/media/mostPopularMedia.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesMediaMostPopularMediaFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MediaItemWrapped]])
                res.media_item_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_resources_media_search_results_json(self, request: operations.GetResourcesMediaSearchResultsJSONRequest) -> operations.GetResourcesMediaSearchResultsJSONResponse:
        r"""Get MediaItems by search query
        Full search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/resources/media/searchResults.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesMediaSearchResultsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MediaItemWrapped]])
                res.media_item_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    