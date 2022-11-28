import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CampaignCreativeAssociations:
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

    
    def dfareporting_campaign_creative_associations_insert(self, request: operations.DfareportingCampaignCreativeAssociationsInsertRequest) -> operations.DfareportingCampaignCreativeAssociationsInsertResponse:
        r"""Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingCampaignCreativeAssociationsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CampaignCreativeAssociation])
                res.campaign_creative_association = out

        return res

    
    def dfareporting_campaign_creative_associations_list(self, request: operations.DfareportingCampaignCreativeAssociationsListRequest) -> operations.DfareportingCampaignCreativeAssociationsListResponse:
        r"""Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingCampaignCreativeAssociationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CampaignCreativeAssociationsListResponse])
                res.campaign_creative_associations_list_response = out

        return res

    