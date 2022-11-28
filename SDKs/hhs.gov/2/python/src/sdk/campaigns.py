import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Campaigns:
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

    
    def get_resources_campaigns_id_json(self, request: operations.GetResourcesCampaignsIDJSONRequest) -> operations.GetResourcesCampaignsIDJSONResponse:
        r"""Get Campaign by ID
        Information about a specific campaign
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/campaigns/{id}.json", request.path_params)
        
        
        client = self._client
        
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
        r"""Get MediaItems by Campaign ID
        Campaign Listings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/campaigns/{id}/media.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
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
        r"""Get MediaItems for Campaign
        MediaItem
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/resources/campaigns/{id}/syndicate.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
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
        r"""Get Campaigns
        Media Listings for a specific campaign
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/resources/campaigns.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
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

    