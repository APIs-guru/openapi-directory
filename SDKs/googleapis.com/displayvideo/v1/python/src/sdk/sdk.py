import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://displayvideo.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def displayvideo_advertisers_assets_upload(self, request: operations.DisplayvideoAdvertisersAssetsUploadRequest) -> operations.DisplayvideoAdvertisersAssetsUploadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/assets", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersAssetsUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateAssetResponse])
                res.create_asset_response = out

        return res

    
    def displayvideo_advertisers_audit(self, request: operations.DisplayvideoAdvertisersAuditRequest) -> operations.DisplayvideoAdvertisersAuditResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}:audit", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersAuditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuditAdvertiserResponse])
                res.audit_advertiser_response = out

        return res

    
    def displayvideo_advertisers_bulk_edit_advertiser_assigned_targeting_options(self, request: operations.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest) -> operations.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}:bulkEditAdvertiserAssignedTargetingOptions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditAdvertiserAssignedTargetingOptionsResponse])
                res.bulk_edit_advertiser_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_bulk_list_advertiser_assigned_targeting_options(self, request: operations.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsRequest) -> operations.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}:bulkListAdvertiserAssignedTargetingOptions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkListAdvertiserAssignedTargetingOptionsResponse])
                res.bulk_list_advertiser_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_campaigns_bulk_list_campaign_assigned_targeting_options(self, request: operations.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest) -> operations.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}:bulkListCampaignAssignedTargetingOptions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkListCampaignAssignedTargetingOptionsResponse])
                res.bulk_list_campaign_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_campaigns_create(self, request: operations.DisplayvideoAdvertisersCampaignsCreateRequest) -> operations.DisplayvideoAdvertisersCampaignsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Campaign])
                res.campaign = out

        return res

    
    def displayvideo_advertisers_campaigns_delete(self, request: operations.DisplayvideoAdvertisersCampaignsDeleteRequest) -> operations.DisplayvideoAdvertisersCampaignsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_campaigns_get(self, request: operations.DisplayvideoAdvertisersCampaignsGetRequest) -> operations.DisplayvideoAdvertisersCampaignsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Campaign])
                res.campaign = out

        return res

    
    def displayvideo_advertisers_campaigns_list(self, request: operations.DisplayvideoAdvertisersCampaignsListRequest) -> operations.DisplayvideoAdvertisersCampaignsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCampaignsResponse])
                res.list_campaigns_response = out

        return res

    
    def displayvideo_advertisers_campaigns_patch(self, request: operations.DisplayvideoAdvertisersCampaignsPatchRequest) -> operations.DisplayvideoAdvertisersCampaignsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Campaign])
                res.campaign = out

        return res

    
    def displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_get(self, request: operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest) -> operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_list(self, request: operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest) -> operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCampaignAssignedTargetingOptionsResponse])
                res.list_campaign_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_channels_create(self, request: operations.DisplayvideoAdvertisersChannelsCreateRequest) -> operations.DisplayvideoAdvertisersChannelsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/channels", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersChannelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    
    def displayvideo_advertisers_channels_list(self, request: operations.DisplayvideoAdvertisersChannelsListRequest) -> operations.DisplayvideoAdvertisersChannelsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/channels", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersChannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListChannelsResponse])
                res.list_channels_response = out

        return res

    
    def displayvideo_advertisers_channels_patch(self, request: operations.DisplayvideoAdvertisersChannelsPatchRequest) -> operations.DisplayvideoAdvertisersChannelsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/channels/{channelId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersChannelsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    
    def displayvideo_advertisers_channels_sites_bulk_edit(self, request: operations.DisplayvideoAdvertisersChannelsSitesBulkEditRequest) -> operations.DisplayvideoAdvertisersChannelsSitesBulkEditResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/channels/{channelId}/sites:bulkEdit", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersChannelsSitesBulkEditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditSitesResponse])
                res.bulk_edit_sites_response = out

        return res

    
    def displayvideo_advertisers_channels_sites_delete(self, request: operations.DisplayvideoAdvertisersChannelsSitesDeleteRequest) -> operations.DisplayvideoAdvertisersChannelsSitesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/channels/{channelId}/sites/{urlOrAppId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersChannelsSitesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_channels_sites_list(self, request: operations.DisplayvideoAdvertisersChannelsSitesListRequest) -> operations.DisplayvideoAdvertisersChannelsSitesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/channels/{channelId}/sites", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersChannelsSitesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSitesResponse])
                res.list_sites_response = out

        return res

    
    def displayvideo_advertisers_channels_sites_replace(self, request: operations.DisplayvideoAdvertisersChannelsSitesReplaceRequest) -> operations.DisplayvideoAdvertisersChannelsSitesReplaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/channels/{channelId}/sites:replace", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersChannelsSitesReplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReplaceSitesResponse])
                res.replace_sites_response = out

        return res

    
    def displayvideo_advertisers_create(self, request: operations.DisplayvideoAdvertisersCreateRequest) -> operations.DisplayvideoAdvertisersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/advertisers"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Advertiser])
                res.advertiser = out

        return res

    
    def displayvideo_advertisers_creatives_create(self, request: operations.DisplayvideoAdvertisersCreativesCreateRequest) -> operations.DisplayvideoAdvertisersCreativesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/creatives", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCreativesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def displayvideo_advertisers_creatives_delete(self, request: operations.DisplayvideoAdvertisersCreativesDeleteRequest) -> operations.DisplayvideoAdvertisersCreativesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/creatives/{creativeId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCreativesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_creatives_get(self, request: operations.DisplayvideoAdvertisersCreativesGetRequest) -> operations.DisplayvideoAdvertisersCreativesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/creatives/{creativeId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCreativesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def displayvideo_advertisers_creatives_list(self, request: operations.DisplayvideoAdvertisersCreativesListRequest) -> operations.DisplayvideoAdvertisersCreativesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/creatives", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCreativesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCreativesResponse])
                res.list_creatives_response = out

        return res

    
    def displayvideo_advertisers_creatives_patch(self, request: operations.DisplayvideoAdvertisersCreativesPatchRequest) -> operations.DisplayvideoAdvertisersCreativesPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/creatives/{creativeId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCreativesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def displayvideo_advertisers_delete(self, request: operations.DisplayvideoAdvertisersDeleteRequest) -> operations.DisplayvideoAdvertisersDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_get(self, request: operations.DisplayvideoAdvertisersGetRequest) -> operations.DisplayvideoAdvertisersGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Advertiser])
                res.advertiser = out

        return res

    
    def displayvideo_advertisers_insertion_orders_bulk_list_insertion_order_assigned_targeting_options(self, request: operations.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}:bulkListInsertionOrderAssignedTargetingOptions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkListInsertionOrderAssignedTargetingOptionsResponse])
                res.bulk_list_insertion_order_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_insertion_orders_create(self, request: operations.DisplayvideoAdvertisersInsertionOrdersCreateRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsertionOrder])
                res.insertion_order = out

        return res

    
    def displayvideo_advertisers_insertion_orders_delete(self, request: operations.DisplayvideoAdvertisersInsertionOrdersDeleteRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_insertion_orders_get(self, request: operations.DisplayvideoAdvertisersInsertionOrdersGetRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsertionOrder])
                res.insertion_order = out

        return res

    
    def displayvideo_advertisers_insertion_orders_list(self, request: operations.DisplayvideoAdvertisersInsertionOrdersListRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInsertionOrdersResponse])
                res.list_insertion_orders_response = out

        return res

    
    def displayvideo_advertisers_insertion_orders_patch(self, request: operations.DisplayvideoAdvertisersInsertionOrdersPatchRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsertionOrder])
                res.insertion_order = out

        return res

    
    def displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_get(self, request: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_list(self, request: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInsertionOrderAssignedTargetingOptionsResponse])
                res.list_insertion_order_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_invoices_list(self, request: operations.DisplayvideoAdvertisersInvoicesListRequest) -> operations.DisplayvideoAdvertisersInvoicesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/invoices", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInvoicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInvoicesResponse])
                res.list_invoices_response = out

        return res

    
    def displayvideo_advertisers_invoices_lookup_invoice_currency(self, request: operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest) -> operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/invoices:lookupInvoiceCurrency", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LookupInvoiceCurrencyResponse])
                res.lookup_invoice_currency_response = out

        return res

    
    def displayvideo_advertisers_line_items_bulk_edit_line_item_assigned_targeting_options(self, request: operations.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest) -> operations.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}:bulkEditLineItemAssignedTargetingOptions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditLineItemAssignedTargetingOptionsResponse])
                res.bulk_edit_line_item_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_line_items_bulk_list_line_item_assigned_targeting_options(self, request: operations.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest) -> operations.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}:bulkListLineItemAssignedTargetingOptions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkListLineItemAssignedTargetingOptionsResponse])
                res.bulk_list_line_item_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_line_items_create(self, request: operations.DisplayvideoAdvertisersLineItemsCreateRequest) -> operations.DisplayvideoAdvertisersLineItemsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LineItem])
                res.line_item = out

        return res

    
    def displayvideo_advertisers_line_items_delete(self, request: operations.DisplayvideoAdvertisersLineItemsDeleteRequest) -> operations.DisplayvideoAdvertisersLineItemsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_line_items_generate_default(self, request: operations.DisplayvideoAdvertisersLineItemsGenerateDefaultRequest) -> operations.DisplayvideoAdvertisersLineItemsGenerateDefaultResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems:generateDefault", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsGenerateDefaultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LineItem])
                res.line_item = out

        return res

    
    def displayvideo_advertisers_line_items_get(self, request: operations.DisplayvideoAdvertisersLineItemsGetRequest) -> operations.DisplayvideoAdvertisersLineItemsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LineItem])
                res.line_item = out

        return res

    
    def displayvideo_advertisers_line_items_list(self, request: operations.DisplayvideoAdvertisersLineItemsListRequest) -> operations.DisplayvideoAdvertisersLineItemsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLineItemsResponse])
                res.list_line_items_response = out

        return res

    
    def displayvideo_advertisers_line_items_patch(self, request: operations.DisplayvideoAdvertisersLineItemsPatchRequest) -> operations.DisplayvideoAdvertisersLineItemsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LineItem])
                res.line_item = out

        return res

    
    def displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_create(self, request: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest) -> operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_delete(self, request: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteRequest) -> operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_get(self, request: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest) -> operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_list(self, request: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest) -> operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLineItemAssignedTargetingOptionsResponse])
                res.list_line_item_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_list(self, request: operations.DisplayvideoAdvertisersListRequest) -> operations.DisplayvideoAdvertisersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/advertisers"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAdvertisersResponse])
                res.list_advertisers_response = out

        return res

    
    def displayvideo_advertisers_location_lists_assigned_locations_bulk_edit(self, request: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest) -> operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations:bulkEdit", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditAssignedLocationsResponse])
                res.bulk_edit_assigned_locations_response = out

        return res

    
    def displayvideo_advertisers_location_lists_assigned_locations_create(self, request: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest) -> operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedLocation])
                res.assigned_location = out

        return res

    
    def displayvideo_advertisers_location_lists_assigned_locations_delete(self, request: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest) -> operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations/{assignedLocationId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_location_lists_assigned_locations_list(self, request: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest) -> operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAssignedLocationsResponse])
                res.list_assigned_locations_response = out

        return res

    
    def displayvideo_advertisers_location_lists_create(self, request: operations.DisplayvideoAdvertisersLocationListsCreateRequest) -> operations.DisplayvideoAdvertisersLocationListsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/locationLists", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLocationListsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationList])
                res.location_list = out

        return res

    
    def displayvideo_advertisers_location_lists_list(self, request: operations.DisplayvideoAdvertisersLocationListsListRequest) -> operations.DisplayvideoAdvertisersLocationListsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/locationLists", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLocationListsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationListsResponse])
                res.list_location_lists_response = out

        return res

    
    def displayvideo_advertisers_location_lists_patch(self, request: operations.DisplayvideoAdvertisersLocationListsPatchRequest) -> operations.DisplayvideoAdvertisersLocationListsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/locationLists/{locationListId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLocationListsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationList])
                res.location_list = out

        return res

    
    def displayvideo_advertisers_manual_triggers_activate(self, request: operations.DisplayvideoAdvertisersManualTriggersActivateRequest) -> operations.DisplayvideoAdvertisersManualTriggersActivateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/manualTriggers/{triggerId}:activate", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersManualTriggersActivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManualTrigger])
                res.manual_trigger = out

        return res

    
    def displayvideo_advertisers_manual_triggers_create(self, request: operations.DisplayvideoAdvertisersManualTriggersCreateRequest) -> operations.DisplayvideoAdvertisersManualTriggersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/manualTriggers", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersManualTriggersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManualTrigger])
                res.manual_trigger = out

        return res

    
    def displayvideo_advertisers_manual_triggers_deactivate(self, request: operations.DisplayvideoAdvertisersManualTriggersDeactivateRequest) -> operations.DisplayvideoAdvertisersManualTriggersDeactivateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/manualTriggers/{triggerId}:deactivate", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersManualTriggersDeactivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManualTrigger])
                res.manual_trigger = out

        return res

    
    def displayvideo_advertisers_manual_triggers_get(self, request: operations.DisplayvideoAdvertisersManualTriggersGetRequest) -> operations.DisplayvideoAdvertisersManualTriggersGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/manualTriggers/{triggerId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersManualTriggersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManualTrigger])
                res.manual_trigger = out

        return res

    
    def displayvideo_advertisers_manual_triggers_list(self, request: operations.DisplayvideoAdvertisersManualTriggersListRequest) -> operations.DisplayvideoAdvertisersManualTriggersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/manualTriggers", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersManualTriggersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListManualTriggersResponse])
                res.list_manual_triggers_response = out

        return res

    
    def displayvideo_advertisers_manual_triggers_patch(self, request: operations.DisplayvideoAdvertisersManualTriggersPatchRequest) -> operations.DisplayvideoAdvertisersManualTriggersPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/manualTriggers/{triggerId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersManualTriggersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManualTrigger])
                res.manual_trigger = out

        return res

    
    def displayvideo_advertisers_negative_keyword_lists_create(self, request: operations.DisplayvideoAdvertisersNegativeKeywordListsCreateRequest) -> operations.DisplayvideoAdvertisersNegativeKeywordListsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/negativeKeywordLists", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersNegativeKeywordListsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NegativeKeywordList])
                res.negative_keyword_list = out

        return res

    
    def displayvideo_advertisers_negative_keyword_lists_list(self, request: operations.DisplayvideoAdvertisersNegativeKeywordListsListRequest) -> operations.DisplayvideoAdvertisersNegativeKeywordListsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/negativeKeywordLists", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersNegativeKeywordListsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNegativeKeywordListsResponse])
                res.list_negative_keyword_lists_response = out

        return res

    
    def displayvideo_advertisers_negative_keyword_lists_negative_keywords_bulk_edit(self, request: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest) -> operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:bulkEdit", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditNegativeKeywordsResponse])
                res.bulk_edit_negative_keywords_response = out

        return res

    
    def displayvideo_advertisers_negative_keyword_lists_negative_keywords_delete(self, request: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest) -> operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords/{keywordValue}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_negative_keyword_lists_negative_keywords_list(self, request: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListRequest) -> operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNegativeKeywordsResponse])
                res.list_negative_keywords_response = out

        return res

    
    def displayvideo_advertisers_negative_keyword_lists_negative_keywords_replace(self, request: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest) -> operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:replace", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReplaceNegativeKeywordsResponse])
                res.replace_negative_keywords_response = out

        return res

    
    def displayvideo_advertisers_negative_keyword_lists_patch(self, request: operations.DisplayvideoAdvertisersNegativeKeywordListsPatchRequest) -> operations.DisplayvideoAdvertisersNegativeKeywordListsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersNegativeKeywordListsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NegativeKeywordList])
                res.negative_keyword_list = out

        return res

    
    def displayvideo_advertisers_patch(self, request: operations.DisplayvideoAdvertisersPatchRequest) -> operations.DisplayvideoAdvertisersPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Advertiser])
                res.advertiser = out

        return res

    
    def displayvideo_advertisers_targeting_types_assigned_targeting_options_create(self, request: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest) -> operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_advertisers_targeting_types_assigned_targeting_options_delete(self, request: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest) -> operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_targeting_types_assigned_targeting_options_get(self, request: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest) -> operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_advertisers_targeting_types_assigned_targeting_options_list(self, request: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest) -> operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAdvertiserAssignedTargetingOptionsResponse])
                res.list_advertiser_assigned_targeting_options_response = out

        return res

    
    def displayvideo_combined_audiences_get(self, request: operations.DisplayvideoCombinedAudiencesGetRequest) -> operations.DisplayvideoCombinedAudiencesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/combinedAudiences/{combinedAudienceId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCombinedAudiencesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CombinedAudience])
                res.combined_audience = out

        return res

    
    def displayvideo_combined_audiences_list(self, request: operations.DisplayvideoCombinedAudiencesListRequest) -> operations.DisplayvideoCombinedAudiencesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/combinedAudiences"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCombinedAudiencesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCombinedAudiencesResponse])
                res.list_combined_audiences_response = out

        return res

    
    def displayvideo_custom_bidding_algorithms_create(self, request: operations.DisplayvideoCustomBiddingAlgorithmsCreateRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/customBiddingAlgorithms"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomBiddingAlgorithm])
                res.custom_bidding_algorithm = out

        return res

    
    def displayvideo_custom_bidding_algorithms_get(self, request: operations.DisplayvideoCustomBiddingAlgorithmsGetRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/customBiddingAlgorithms/{customBiddingAlgorithmId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomBiddingAlgorithm])
                res.custom_bidding_algorithm = out

        return res

    
    def displayvideo_custom_bidding_algorithms_list(self, request: operations.DisplayvideoCustomBiddingAlgorithmsListRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/customBiddingAlgorithms"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCustomBiddingAlgorithmsResponse])
                res.list_custom_bidding_algorithms_response = out

        return res

    
    def displayvideo_custom_bidding_algorithms_patch(self, request: operations.DisplayvideoCustomBiddingAlgorithmsPatchRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/customBiddingAlgorithms/{customBiddingAlgorithmId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomBiddingAlgorithm])
                res.custom_bidding_algorithm = out

        return res

    
    def displayvideo_custom_bidding_algorithms_scripts_create(self, request: operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomBiddingScript])
                res.custom_bidding_script = out

        return res

    
    def displayvideo_custom_bidding_algorithms_scripts_get(self, request: operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts/{customBiddingScriptId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomBiddingScript])
                res.custom_bidding_script = out

        return res

    
    def displayvideo_custom_bidding_algorithms_scripts_list(self, request: operations.DisplayvideoCustomBiddingAlgorithmsScriptsListRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsScriptsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsScriptsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCustomBiddingScriptsResponse])
                res.list_custom_bidding_scripts_response = out

        return res

    
    def displayvideo_custom_bidding_algorithms_upload_script(self, request: operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/customBiddingAlgorithms/{customBiddingAlgorithmId}:uploadScript", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomBiddingScriptRef])
                res.custom_bidding_script_ref = out

        return res

    
    def displayvideo_custom_lists_get(self, request: operations.DisplayvideoCustomListsGetRequest) -> operations.DisplayvideoCustomListsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/customLists/{customListId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomListsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomList])
                res.custom_list = out

        return res

    
    def displayvideo_custom_lists_list(self, request: operations.DisplayvideoCustomListsListRequest) -> operations.DisplayvideoCustomListsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/customLists"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomListsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCustomListsResponse])
                res.list_custom_lists_response = out

        return res

    
    def displayvideo_first_and_third_party_audiences_create(self, request: operations.DisplayvideoFirstAndThirdPartyAudiencesCreateRequest) -> operations.DisplayvideoFirstAndThirdPartyAudiencesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/firstAndThirdPartyAudiences"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoFirstAndThirdPartyAudiencesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstAndThirdPartyAudience])
                res.first_and_third_party_audience = out

        return res

    
    def displayvideo_first_and_third_party_audiences_edit_customer_match_members(self, request: operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest) -> operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}:editCustomerMatchMembers", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditCustomerMatchMembersResponse])
                res.edit_customer_match_members_response = out

        return res

    
    def displayvideo_first_and_third_party_audiences_get(self, request: operations.DisplayvideoFirstAndThirdPartyAudiencesGetRequest) -> operations.DisplayvideoFirstAndThirdPartyAudiencesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoFirstAndThirdPartyAudiencesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstAndThirdPartyAudience])
                res.first_and_third_party_audience = out

        return res

    
    def displayvideo_first_and_third_party_audiences_list(self, request: operations.DisplayvideoFirstAndThirdPartyAudiencesListRequest) -> operations.DisplayvideoFirstAndThirdPartyAudiencesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/firstAndThirdPartyAudiences"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoFirstAndThirdPartyAudiencesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFirstAndThirdPartyAudiencesResponse])
                res.list_first_and_third_party_audiences_response = out

        return res

    
    def displayvideo_first_and_third_party_audiences_patch(self, request: operations.DisplayvideoFirstAndThirdPartyAudiencesPatchRequest) -> operations.DisplayvideoFirstAndThirdPartyAudiencesPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoFirstAndThirdPartyAudiencesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstAndThirdPartyAudience])
                res.first_and_third_party_audience = out

        return res

    
    def displayvideo_floodlight_groups_get(self, request: operations.DisplayvideoFloodlightGroupsGetRequest) -> operations.DisplayvideoFloodlightGroupsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/floodlightGroups/{floodlightGroupId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoFloodlightGroupsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightGroup])
                res.floodlight_group = out

        return res

    
    def displayvideo_google_audiences_get(self, request: operations.DisplayvideoGoogleAudiencesGetRequest) -> operations.DisplayvideoGoogleAudiencesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/googleAudiences/{googleAudienceId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoGoogleAudiencesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAudience])
                res.google_audience = out

        return res

    
    def displayvideo_google_audiences_list(self, request: operations.DisplayvideoGoogleAudiencesListRequest) -> operations.DisplayvideoGoogleAudiencesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/googleAudiences"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoGoogleAudiencesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGoogleAudiencesResponse])
                res.list_google_audiences_response = out

        return res

    
    def displayvideo_guaranteed_orders_create(self, request: operations.DisplayvideoGuaranteedOrdersCreateRequest) -> operations.DisplayvideoGuaranteedOrdersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/guaranteedOrders"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoGuaranteedOrdersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GuaranteedOrder])
                res.guaranteed_order = out

        return res

    
    def displayvideo_guaranteed_orders_edit_guaranteed_order_read_accessors(self, request: operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest) -> operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/guaranteedOrders/{guaranteedOrderId}:editGuaranteedOrderReadAccessors", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditGuaranteedOrderReadAccessorsResponse])
                res.edit_guaranteed_order_read_accessors_response = out

        return res

    
    def displayvideo_guaranteed_orders_get(self, request: operations.DisplayvideoGuaranteedOrdersGetRequest) -> operations.DisplayvideoGuaranteedOrdersGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/guaranteedOrders/{guaranteedOrderId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoGuaranteedOrdersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GuaranteedOrder])
                res.guaranteed_order = out

        return res

    
    def displayvideo_guaranteed_orders_list(self, request: operations.DisplayvideoGuaranteedOrdersListRequest) -> operations.DisplayvideoGuaranteedOrdersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/guaranteedOrders"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoGuaranteedOrdersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGuaranteedOrdersResponse])
                res.list_guaranteed_orders_response = out

        return res

    
    def displayvideo_guaranteed_orders_patch(self, request: operations.DisplayvideoGuaranteedOrdersPatchRequest) -> operations.DisplayvideoGuaranteedOrdersPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/guaranteedOrders/{guaranteedOrderId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoGuaranteedOrdersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GuaranteedOrder])
                res.guaranteed_order = out

        return res

    
    def displayvideo_inventory_source_groups_assigned_inventory_sources_bulk_edit(self, request: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest) -> operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources:bulkEdit", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditAssignedInventorySourcesResponse])
                res.bulk_edit_assigned_inventory_sources_response = out

        return res

    
    def displayvideo_inventory_source_groups_assigned_inventory_sources_create(self, request: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest) -> operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedInventorySource])
                res.assigned_inventory_source = out

        return res

    
    def displayvideo_inventory_source_groups_assigned_inventory_sources_delete(self, request: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest) -> operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources/{assignedInventorySourceId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_inventory_source_groups_assigned_inventory_sources_list(self, request: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest) -> operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAssignedInventorySourcesResponse])
                res.list_assigned_inventory_sources_response = out

        return res

    
    def displayvideo_inventory_source_groups_create(self, request: operations.DisplayvideoInventorySourceGroupsCreateRequest) -> operations.DisplayvideoInventorySourceGroupsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/inventorySourceGroups"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventorySourceGroup])
                res.inventory_source_group = out

        return res

    
    def displayvideo_inventory_source_groups_delete(self, request: operations.DisplayvideoInventorySourceGroupsDeleteRequest) -> operations.DisplayvideoInventorySourceGroupsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/inventorySourceGroups/{inventorySourceGroupId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_inventory_source_groups_get(self, request: operations.DisplayvideoInventorySourceGroupsGetRequest) -> operations.DisplayvideoInventorySourceGroupsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/inventorySourceGroups/{inventorySourceGroupId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventorySourceGroup])
                res.inventory_source_group = out

        return res

    
    def displayvideo_inventory_source_groups_list(self, request: operations.DisplayvideoInventorySourceGroupsListRequest) -> operations.DisplayvideoInventorySourceGroupsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/inventorySourceGroups"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourceGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInventorySourceGroupsResponse])
                res.list_inventory_source_groups_response = out

        return res

    
    def displayvideo_inventory_sources_create(self, request: operations.DisplayvideoInventorySourcesCreateRequest) -> operations.DisplayvideoInventorySourcesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/inventorySources"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourcesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventorySource])
                res.inventory_source = out

        return res

    
    def displayvideo_inventory_sources_edit_inventory_source_read_write_accessors(self, request: operations.DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest) -> operations.DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/inventorySources/{inventorySourceId}:editInventorySourceReadWriteAccessors", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventorySourceAccessors])
                res.inventory_source_accessors = out

        return res

    
    def displayvideo_inventory_sources_get(self, request: operations.DisplayvideoInventorySourcesGetRequest) -> operations.DisplayvideoInventorySourcesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/inventorySources/{inventorySourceId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourcesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventorySource])
                res.inventory_source = out

        return res

    
    def displayvideo_inventory_sources_list(self, request: operations.DisplayvideoInventorySourcesListRequest) -> operations.DisplayvideoInventorySourcesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/inventorySources"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourcesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInventorySourcesResponse])
                res.list_inventory_sources_response = out

        return res

    
    def displayvideo_inventory_sources_patch(self, request: operations.DisplayvideoInventorySourcesPatchRequest) -> operations.DisplayvideoInventorySourcesPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/inventorySources/{inventorySourceId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoInventorySourcesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventorySource])
                res.inventory_source = out

        return res

    
    def displayvideo_media_download(self, request: operations.DisplayvideoMediaDownloadRequest) -> operations.DisplayvideoMediaDownloadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/download/{resourceName}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoMediaDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleBytestreamMedia])
                res.google_bytestream_media = out

        return res

    
    def displayvideo_media_upload(self, request: operations.DisplayvideoMediaUploadRequest) -> operations.DisplayvideoMediaUploadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/media/{resourceName}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoMediaUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleBytestreamMedia])
                res.google_bytestream_media = out

        return res

    
    def displayvideo_partners_bulk_edit_partner_assigned_targeting_options(self, request: operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsRequest) -> operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}:bulkEditPartnerAssignedTargetingOptions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditPartnerAssignedTargetingOptionsResponse])
                res.bulk_edit_partner_assigned_targeting_options_response = out

        return res

    
    def displayvideo_partners_channels_create(self, request: operations.DisplayvideoPartnersChannelsCreateRequest) -> operations.DisplayvideoPartnersChannelsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/channels", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersChannelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    
    def displayvideo_partners_channels_list(self, request: operations.DisplayvideoPartnersChannelsListRequest) -> operations.DisplayvideoPartnersChannelsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/channels", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersChannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListChannelsResponse])
                res.list_channels_response = out

        return res

    
    def displayvideo_partners_channels_patch(self, request: operations.DisplayvideoPartnersChannelsPatchRequest) -> operations.DisplayvideoPartnersChannelsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/channels/{channelId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersChannelsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    
    def displayvideo_partners_channels_sites_bulk_edit(self, request: operations.DisplayvideoPartnersChannelsSitesBulkEditRequest) -> operations.DisplayvideoPartnersChannelsSitesBulkEditResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/channels/{channelId}/sites:bulkEdit", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersChannelsSitesBulkEditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditSitesResponse])
                res.bulk_edit_sites_response = out

        return res

    
    def displayvideo_partners_channels_sites_delete(self, request: operations.DisplayvideoPartnersChannelsSitesDeleteRequest) -> operations.DisplayvideoPartnersChannelsSitesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/channels/{channelId}/sites/{urlOrAppId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersChannelsSitesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_partners_channels_sites_list(self, request: operations.DisplayvideoPartnersChannelsSitesListRequest) -> operations.DisplayvideoPartnersChannelsSitesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/channels/{channelId}/sites", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersChannelsSitesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSitesResponse])
                res.list_sites_response = out

        return res

    
    def displayvideo_partners_channels_sites_replace(self, request: operations.DisplayvideoPartnersChannelsSitesReplaceRequest) -> operations.DisplayvideoPartnersChannelsSitesReplaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/channels/{channelId}/sites:replace", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersChannelsSitesReplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReplaceSitesResponse])
                res.replace_sites_response = out

        return res

    
    def displayvideo_partners_get(self, request: operations.DisplayvideoPartnersGetRequest) -> operations.DisplayvideoPartnersGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Partner])
                res.partner = out

        return res

    
    def displayvideo_partners_list(self, request: operations.DisplayvideoPartnersListRequest) -> operations.DisplayvideoPartnersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/partners"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPartnersResponse])
                res.list_partners_response = out

        return res

    
    def displayvideo_partners_targeting_types_assigned_targeting_options_create(self, request: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest) -> operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_partners_targeting_types_assigned_targeting_options_delete(self, request: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest) -> operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_partners_targeting_types_assigned_targeting_options_get(self, request: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest) -> operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_partners_targeting_types_assigned_targeting_options_list(self, request: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest) -> operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPartnerAssignedTargetingOptionsResponse])
                res.list_partner_assigned_targeting_options_response = out

        return res

    
    def displayvideo_sdfdownloadtasks_create(self, request: operations.DisplayvideoSdfdownloadtasksCreateRequest) -> operations.DisplayvideoSdfdownloadtasksCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/sdfdownloadtasks"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoSdfdownloadtasksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def displayvideo_sdfdownloadtasks_operations_get(self, request: operations.DisplayvideoSdfdownloadtasksOperationsGetRequest) -> operations.DisplayvideoSdfdownloadtasksOperationsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoSdfdownloadtasksOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def displayvideo_targeting_types_targeting_options_get(self, request: operations.DisplayvideoTargetingTypesTargetingOptionsGetRequest) -> operations.DisplayvideoTargetingTypesTargetingOptionsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/targetingTypes/{targetingType}/targetingOptions/{targetingOptionId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoTargetingTypesTargetingOptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TargetingOption])
                res.targeting_option = out

        return res

    
    def displayvideo_targeting_types_targeting_options_list(self, request: operations.DisplayvideoTargetingTypesTargetingOptionsListRequest) -> operations.DisplayvideoTargetingTypesTargetingOptionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/targetingTypes/{targetingType}/targetingOptions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoTargetingTypesTargetingOptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTargetingOptionsResponse])
                res.list_targeting_options_response = out

        return res

    
    def displayvideo_targeting_types_targeting_options_search(self, request: operations.DisplayvideoTargetingTypesTargetingOptionsSearchRequest) -> operations.DisplayvideoTargetingTypesTargetingOptionsSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/targetingTypes/{targetingType}/targetingOptions:search", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoTargetingTypesTargetingOptionsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchTargetingOptionsResponse])
                res.search_targeting_options_response = out

        return res

    
    def displayvideo_users_bulk_edit_assigned_user_roles(self, request: operations.DisplayvideoUsersBulkEditAssignedUserRolesRequest) -> operations.DisplayvideoUsersBulkEditAssignedUserRolesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/users/{userId}:bulkEditAssignedUserRoles", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoUsersBulkEditAssignedUserRolesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditAssignedUserRolesResponse])
                res.bulk_edit_assigned_user_roles_response = out

        return res

    
    def displayvideo_users_create(self, request: operations.DisplayvideoUsersCreateRequest) -> operations.DisplayvideoUsersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/users"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoUsersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def displayvideo_users_delete(self, request: operations.DisplayvideoUsersDeleteRequest) -> operations.DisplayvideoUsersDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/users/{userId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoUsersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_users_get(self, request: operations.DisplayvideoUsersGetRequest) -> operations.DisplayvideoUsersGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/users/{userId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoUsersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def displayvideo_users_list(self, request: operations.DisplayvideoUsersListRequest) -> operations.DisplayvideoUsersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/users"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoUsersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListUsersResponse])
                res.list_users_response = out

        return res

    
    def displayvideo_users_patch(self, request: operations.DisplayvideoUsersPatchRequest) -> operations.DisplayvideoUsersPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/users/{userId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoUsersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    