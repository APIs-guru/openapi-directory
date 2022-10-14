import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://hhs.gov/api/v2",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def get_resources_campaigns_id_json(self, request: operations.GetResourcesCampaignsIDJSONRequest) -> operations.GetResourcesCampaignsIDJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/campaigns/{id}.json", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesCampaignsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CampaignWrapped])
                res.campaign_wrapped = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    
    def get_resources_campaigns_id_media_json(self, request: operations.GetResourcesCampaignsIDMediaJSONRequest) -> operations.GetResourcesCampaignsIDMediaJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/campaigns/{id}/media.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesCampaignsIDMediaJSONResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MediaItemWrapped])
                res.media_item_wrapped = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    
    def get_resources_campaigns_id_syndicate_format_(self, request: operations.GetResourcesCampaignsIDSyndicateFormatRequest) -> operations.GetResourcesCampaignsIDSyndicateFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/campaigns/{id}/syndicate.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesCampaignsIDSyndicateFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyndicateMarshallerWrapped])
                res.syndicate_marshaller_wrapped = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    
    def get_resources_campaigns_json(self, request: operations.GetResourcesCampaignsJSONRequest) -> operations.GetResourcesCampaignsJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/resources/campaigns.json"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesCampaignsJSONResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CampaignWrapped])
                res.campaign_wrapped = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    
    def get_resources_json(self, request: operations.GetResourcesJSONRequest) -> operations.GetResourcesJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/resources.json"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesJSONResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.resource_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    
    def get_resources_languages_id_json(self, request: operations.GetResourcesLanguagesIDJSONRequest) -> operations.GetResourcesLanguagesIDJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/languages/{id}.json", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesLanguagesIDJSONResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LanguageWrapped]])
                res.language_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    
    def get_resources_languages_json(self, request: operations.GetResourcesLanguagesJSONRequest) -> operations.GetResourcesLanguagesJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/resources/languages.json"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesLanguagesJSONResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LanguageWrapped]])
                res.language_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    
    def get_resources_media_types_format_(self, request: operations.GetResourcesMediaTypesFormatRequest) -> operations.GetResourcesMediaTypesFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/mediaTypes.{format}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesMediaTypesFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MediaTypeHolderWrapped]])
                res.media_type_holder_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    
    def get_resources_media_featured_json(self, request: operations.GetResourcesMediaFeaturedJSONRequest) -> operations.GetResourcesMediaFeaturedJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/resources/media/featured.json"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/media/{id}/content", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/media/{id}/embed.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/media/{id}.json", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/media/{id}/preview.jpg", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/media/{id}/relatedMedia.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/media/{id}/syndicate.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/media/{id}/thumbnail.jpg", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/media/{id}/youtubeMetaData.json", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/resources/media.json"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/media/mostPopularMedia.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/resources/media/searchResults.json"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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

    
    
    def get_resources_sources_id_json(self, request: operations.GetResourcesSourcesIDJSONRequest) -> operations.GetResourcesSourcesIDJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/sources/{id}.json", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/sources/{id}/syndicate.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/resources/sources.json"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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

    
    
    def get_resources_tags_format_(self, request: operations.GetResourcesTagsFormatRequest) -> operations.GetResourcesTagsFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/tags.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/tags/{id}.{format}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/tags/{id}/media.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/tags/{id}/related.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/tags/{id}/syndicate.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/tags/tagLanguages.{format}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/tags/tagTypes.{format}", request.path_params)
        
        client = self.client

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

    
    
    def get_resources_user_media_lists_id_json(self, request: operations.GetResourcesUserMediaListsIDJSONRequest) -> operations.GetResourcesUserMediaListsIDJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/resources/userMediaLists/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResourcesUserMediaListsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MediaItemWrapped]])
                res.media_item_wrappeds = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    