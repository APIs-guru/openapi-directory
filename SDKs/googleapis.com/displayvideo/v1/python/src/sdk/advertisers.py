import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Advertisers:
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

    
    def displayvideo_advertisers_assets_upload(self, request: operations.DisplayvideoAdvertisersAssetsUploadRequest) -> operations.DisplayvideoAdvertisersAssetsUploadResponse:
        r"""Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/assets", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersAssetsUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateAssetResponse])
                res.create_asset_response = out

        return res

    
    def displayvideo_advertisers_audit(self, request: operations.DisplayvideoAdvertisersAuditRequest) -> operations.DisplayvideoAdvertisersAuditResponse:
        r"""Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}:audit", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersAuditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuditAdvertiserResponse])
                res.audit_advertiser_response = out

        return res

    
    def displayvideo_advertisers_bulk_edit_advertiser_assigned_targeting_options(self, request: operations.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest) -> operations.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse:
        r"""Bulk edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}:bulkEditAdvertiserAssignedTargetingOptions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditAdvertiserAssignedTargetingOptionsResponse])
                res.bulk_edit_advertiser_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_bulk_list_advertiser_assigned_targeting_options(self, request: operations.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsRequest) -> operations.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsResponse:
        r"""Lists assigned targeting options of an advertiser across targeting types.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}:bulkListAdvertiserAssignedTargetingOptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkListAdvertiserAssignedTargetingOptionsResponse])
                res.bulk_list_advertiser_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_campaigns_bulk_list_campaign_assigned_targeting_options(self, request: operations.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest) -> operations.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse:
        r"""Lists assigned targeting options of a campaign across targeting types.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}:bulkListCampaignAssignedTargetingOptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkListCampaignAssignedTargetingOptionsResponse])
                res.bulk_list_campaign_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_campaigns_create(self, request: operations.DisplayvideoAdvertisersCampaignsCreateRequest) -> operations.DisplayvideoAdvertisersCampaignsCreateResponse:
        r"""Creates a new campaign. Returns the newly created campaign if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Campaign])
                res.campaign = out

        return res

    
    def displayvideo_advertisers_campaigns_delete(self, request: operations.DisplayvideoAdvertisersCampaignsDeleteRequest) -> operations.DisplayvideoAdvertisersCampaignsDeleteResponse:
        r"""Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_campaigns_get(self, request: operations.DisplayvideoAdvertisersCampaignsGetRequest) -> operations.DisplayvideoAdvertisersCampaignsGetResponse:
        r"""Gets a campaign.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Campaign])
                res.campaign = out

        return res

    
    def displayvideo_advertisers_campaigns_list(self, request: operations.DisplayvideoAdvertisersCampaignsListRequest) -> operations.DisplayvideoAdvertisersCampaignsListResponse:
        r"""Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCampaignsResponse])
                res.list_campaigns_response = out

        return res

    
    def displayvideo_advertisers_campaigns_patch(self, request: operations.DisplayvideoAdvertisersCampaignsPatchRequest) -> operations.DisplayvideoAdvertisersCampaignsPatchResponse:
        r"""Updates an existing campaign. Returns the updated campaign if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Campaign])
                res.campaign = out

        return res

    
    def displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_get(self, request: operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest) -> operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse:
        r"""Gets a single targeting option assigned to a campaign.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_advertisers_campaigns_targeting_types_assigned_targeting_options_list(self, request: operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest) -> operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse:
        r"""Lists the targeting options assigned to a campaign for a specified targeting type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCampaignAssignedTargetingOptionsResponse])
                res.list_campaign_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_channels_create(self, request: operations.DisplayvideoAdvertisersChannelsCreateRequest) -> operations.DisplayvideoAdvertisersChannelsCreateResponse:
        r"""Creates a new channel. Returns the newly created channel if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/channels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersChannelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    
    def displayvideo_advertisers_channels_list(self, request: operations.DisplayvideoAdvertisersChannelsListRequest) -> operations.DisplayvideoAdvertisersChannelsListResponse:
        r"""Lists channels for a partner or advertiser.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/channels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersChannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListChannelsResponse])
                res.list_channels_response = out

        return res

    
    def displayvideo_advertisers_channels_patch(self, request: operations.DisplayvideoAdvertisersChannelsPatchRequest) -> operations.DisplayvideoAdvertisersChannelsPatchResponse:
        r"""Updates a channel. Returns the updated channel if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/channels/{channelId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersChannelsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    
    def displayvideo_advertisers_channels_sites_bulk_edit(self, request: operations.DisplayvideoAdvertisersChannelsSitesBulkEditRequest) -> operations.DisplayvideoAdvertisersChannelsSitesBulkEditResponse:
        r"""Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/channels/{channelId}/sites:bulkEdit", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersChannelsSitesBulkEditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditSitesResponse])
                res.bulk_edit_sites_response = out

        return res

    
    def displayvideo_advertisers_channels_sites_delete(self, request: operations.DisplayvideoAdvertisersChannelsSitesDeleteRequest) -> operations.DisplayvideoAdvertisersChannelsSitesDeleteResponse:
        r"""Deletes a site from a channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/channels/{channelId}/sites/{urlOrAppId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersChannelsSitesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_channels_sites_list(self, request: operations.DisplayvideoAdvertisersChannelsSitesListRequest) -> operations.DisplayvideoAdvertisersChannelsSitesListResponse:
        r"""Lists sites in a channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/channels/{channelId}/sites", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersChannelsSitesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSitesResponse])
                res.list_sites_response = out

        return res

    
    def displayvideo_advertisers_channels_sites_replace(self, request: operations.DisplayvideoAdvertisersChannelsSitesReplaceRequest) -> operations.DisplayvideoAdvertisersChannelsSitesReplaceResponse:
        r"""Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/channels/{channelId}/sites:replace", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersChannelsSitesReplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReplaceSitesResponse])
                res.replace_sites_response = out

        return res

    
    def displayvideo_advertisers_create(self, request: operations.DisplayvideoAdvertisersCreateRequest) -> operations.DisplayvideoAdvertisersCreateResponse:
        r"""Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/advertisers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Advertiser])
                res.advertiser = out

        return res

    
    def displayvideo_advertisers_creatives_create(self, request: operations.DisplayvideoAdvertisersCreativesCreateRequest) -> operations.DisplayvideoAdvertisersCreativesCreateResponse:
        r"""Creates a new creative. Returns the newly created creative if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/creatives", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCreativesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def displayvideo_advertisers_creatives_delete(self, request: operations.DisplayvideoAdvertisersCreativesDeleteRequest) -> operations.DisplayvideoAdvertisersCreativesDeleteResponse:
        r"""Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/creatives/{creativeId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCreativesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_creatives_get(self, request: operations.DisplayvideoAdvertisersCreativesGetRequest) -> operations.DisplayvideoAdvertisersCreativesGetResponse:
        r"""Gets a creative.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/creatives/{creativeId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCreativesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def displayvideo_advertisers_creatives_list(self, request: operations.DisplayvideoAdvertisersCreativesListRequest) -> operations.DisplayvideoAdvertisersCreativesListResponse:
        r"""Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/creatives", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCreativesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCreativesResponse])
                res.list_creatives_response = out

        return res

    
    def displayvideo_advertisers_creatives_patch(self, request: operations.DisplayvideoAdvertisersCreativesPatchRequest) -> operations.DisplayvideoAdvertisersCreativesPatchResponse:
        r"""Updates an existing creative. Returns the updated creative if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/creatives/{creativeId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersCreativesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def displayvideo_advertisers_delete(self, request: operations.DisplayvideoAdvertisersDeleteRequest) -> operations.DisplayvideoAdvertisersDeleteResponse:
        r"""Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_get(self, request: operations.DisplayvideoAdvertisersGetRequest) -> operations.DisplayvideoAdvertisersGetResponse:
        r"""Gets an advertiser.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Advertiser])
                res.advertiser = out

        return res

    
    def displayvideo_advertisers_insertion_orders_bulk_list_insertion_order_assigned_targeting_options(self, request: operations.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse:
        r"""Lists assigned targeting options of an insertion order across targeting types.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}:bulkListInsertionOrderAssignedTargetingOptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkListInsertionOrderAssignedTargetingOptionsResponse])
                res.bulk_list_insertion_order_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_insertion_orders_create(self, request: operations.DisplayvideoAdvertisersInsertionOrdersCreateRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersCreateResponse:
        r"""Creates a new insertion order. Returns the newly created insertion order if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsertionOrder])
                res.insertion_order = out

        return res

    
    def displayvideo_advertisers_insertion_orders_delete(self, request: operations.DisplayvideoAdvertisersInsertionOrdersDeleteRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersDeleteResponse:
        r"""Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_insertion_orders_get(self, request: operations.DisplayvideoAdvertisersInsertionOrdersGetRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersGetResponse:
        r"""Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsertionOrder])
                res.insertion_order = out

        return res

    
    def displayvideo_advertisers_insertion_orders_list(self, request: operations.DisplayvideoAdvertisersInsertionOrdersListRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersListResponse:
        r"""Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInsertionOrdersResponse])
                res.list_insertion_orders_response = out

        return res

    
    def displayvideo_advertisers_insertion_orders_patch(self, request: operations.DisplayvideoAdvertisersInsertionOrdersPatchRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersPatchResponse:
        r"""Updates an existing insertion order. Returns the updated insertion order if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InsertionOrder])
                res.insertion_order = out

        return res

    
    def displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_get(self, request: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetResponse:
        r"""Gets a single targeting option assigned to an insertion order.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_advertisers_insertion_orders_targeting_types_assigned_targeting_options_list(self, request: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListRequest) -> operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse:
        r"""Lists the targeting options assigned to an insertion order.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInsertionOrderAssignedTargetingOptionsResponse])
                res.list_insertion_order_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_invoices_list(self, request: operations.DisplayvideoAdvertisersInvoicesListRequest) -> operations.DisplayvideoAdvertisersInvoicesListResponse:
        r"""Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a \"Partner\" invoice level are not retrievable through this method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/invoices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInvoicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInvoicesResponse])
                res.list_invoices_response = out

        return res

    
    def displayvideo_advertisers_invoices_lookup_invoice_currency(self, request: operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest) -> operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse:
        r"""Retrieves the invoice currency used by an advertiser in a given month.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/invoices:lookupInvoiceCurrency", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LookupInvoiceCurrencyResponse])
                res.lookup_invoice_currency_response = out

        return res

    
    def displayvideo_advertisers_line_items_bulk_edit_line_item_assigned_targeting_options(self, request: operations.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest) -> operations.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse:
        r"""Bulk edits targeting options under a single line item. The operation will delete the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}:bulkEditLineItemAssignedTargetingOptions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditLineItemAssignedTargetingOptionsResponse])
                res.bulk_edit_line_item_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_line_items_bulk_list_line_item_assigned_targeting_options(self, request: operations.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest) -> operations.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse:
        r"""Lists assigned targeting options of a line item across targeting types.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}:bulkListLineItemAssignedTargetingOptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkListLineItemAssignedTargetingOptionsResponse])
                res.bulk_list_line_item_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_line_items_create(self, request: operations.DisplayvideoAdvertisersLineItemsCreateRequest) -> operations.DisplayvideoAdvertisersLineItemsCreateResponse:
        r"""Creates a new line item. Returns the newly created line item if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LineItem])
                res.line_item = out

        return res

    
    def displayvideo_advertisers_line_items_delete(self, request: operations.DisplayvideoAdvertisersLineItemsDeleteRequest) -> operations.DisplayvideoAdvertisersLineItemsDeleteResponse:
        r"""Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_line_items_generate_default(self, request: operations.DisplayvideoAdvertisersLineItemsGenerateDefaultRequest) -> operations.DisplayvideoAdvertisersLineItemsGenerateDefaultResponse:
        r"""Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems:generateDefault", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsGenerateDefaultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LineItem])
                res.line_item = out

        return res

    
    def displayvideo_advertisers_line_items_get(self, request: operations.DisplayvideoAdvertisersLineItemsGetRequest) -> operations.DisplayvideoAdvertisersLineItemsGetResponse:
        r"""Gets a line item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LineItem])
                res.line_item = out

        return res

    
    def displayvideo_advertisers_line_items_list(self, request: operations.DisplayvideoAdvertisersLineItemsListRequest) -> operations.DisplayvideoAdvertisersLineItemsListResponse:
        r"""Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLineItemsResponse])
                res.list_line_items_response = out

        return res

    
    def displayvideo_advertisers_line_items_patch(self, request: operations.DisplayvideoAdvertisersLineItemsPatchRequest) -> operations.DisplayvideoAdvertisersLineItemsPatchResponse:
        r"""Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LineItem])
                res.line_item = out

        return res

    
    def displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_create(self, request: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest) -> operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse:
        r"""Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_delete(self, request: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteRequest) -> operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteResponse:
        r"""Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_get(self, request: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest) -> operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse:
        r"""Gets a single targeting option assigned to a line item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_advertisers_line_items_targeting_types_assigned_targeting_options_list(self, request: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest) -> operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse:
        r"""Lists the targeting options assigned to a line item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLineItemAssignedTargetingOptionsResponse])
                res.list_line_item_assigned_targeting_options_response = out

        return res

    
    def displayvideo_advertisers_list(self, request: operations.DisplayvideoAdvertisersListRequest) -> operations.DisplayvideoAdvertisersListResponse:
        r"""Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/advertisers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAdvertisersResponse])
                res.list_advertisers_response = out

        return res

    
    def displayvideo_advertisers_location_lists_assigned_locations_bulk_edit(self, request: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest) -> operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse:
        r"""Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in BulkEditAssignedLocationsRequest.deleted_assigned_locations and then create the assigned locations provided in BulkEditAssignedLocationsRequest.created_assigned_locations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations:bulkEdit", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditAssignedLocationsResponse])
                res.bulk_edit_assigned_locations_response = out

        return res

    
    def displayvideo_advertisers_location_lists_assigned_locations_create(self, request: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest) -> operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse:
        r"""Creates an assignment between a location and a location list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedLocation])
                res.assigned_location = out

        return res

    
    def displayvideo_advertisers_location_lists_assigned_locations_delete(self, request: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest) -> operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse:
        r"""Deletes the assignment between a location and a location list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations/{assignedLocationId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_location_lists_assigned_locations_list(self, request: operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest) -> operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse:
        r"""Lists locations assigned to a location list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAssignedLocationsResponse])
                res.list_assigned_locations_response = out

        return res

    
    def displayvideo_advertisers_location_lists_create(self, request: operations.DisplayvideoAdvertisersLocationListsCreateRequest) -> operations.DisplayvideoAdvertisersLocationListsCreateResponse:
        r"""Creates a new location list. Returns the newly created location list if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/locationLists", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLocationListsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationList])
                res.location_list = out

        return res

    
    def displayvideo_advertisers_location_lists_list(self, request: operations.DisplayvideoAdvertisersLocationListsListRequest) -> operations.DisplayvideoAdvertisersLocationListsListResponse:
        r"""Lists location lists based on a given advertiser id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/locationLists", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLocationListsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationListsResponse])
                res.list_location_lists_response = out

        return res

    
    def displayvideo_advertisers_location_lists_patch(self, request: operations.DisplayvideoAdvertisersLocationListsPatchRequest) -> operations.DisplayvideoAdvertisersLocationListsPatchResponse:
        r"""Updates a location list. Returns the updated location list if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/locationLists/{locationListId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersLocationListsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationList])
                res.location_list = out

        return res

    
    def displayvideo_advertisers_manual_triggers_activate(self, request: operations.DisplayvideoAdvertisersManualTriggersActivateRequest) -> operations.DisplayvideoAdvertisersManualTriggersActivateResponse:
        r"""Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/manualTriggers/{triggerId}:activate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersManualTriggersActivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManualTrigger])
                res.manual_trigger = out

        return res

    
    def displayvideo_advertisers_manual_triggers_create(self, request: operations.DisplayvideoAdvertisersManualTriggersCreateRequest) -> operations.DisplayvideoAdvertisersManualTriggersCreateResponse:
        r"""Creates a new manual trigger. Returns the newly created manual trigger if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/manualTriggers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersManualTriggersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManualTrigger])
                res.manual_trigger = out

        return res

    
    def displayvideo_advertisers_manual_triggers_deactivate(self, request: operations.DisplayvideoAdvertisersManualTriggersDeactivateRequest) -> operations.DisplayvideoAdvertisersManualTriggersDeactivateResponse:
        r"""Deactivates a manual trigger.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/manualTriggers/{triggerId}:deactivate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersManualTriggersDeactivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManualTrigger])
                res.manual_trigger = out

        return res

    
    def displayvideo_advertisers_manual_triggers_get(self, request: operations.DisplayvideoAdvertisersManualTriggersGetRequest) -> operations.DisplayvideoAdvertisersManualTriggersGetResponse:
        r"""Gets a manual trigger.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/manualTriggers/{triggerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersManualTriggersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManualTrigger])
                res.manual_trigger = out

        return res

    
    def displayvideo_advertisers_manual_triggers_list(self, request: operations.DisplayvideoAdvertisersManualTriggersListRequest) -> operations.DisplayvideoAdvertisersManualTriggersListResponse:
        r"""Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/manualTriggers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersManualTriggersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListManualTriggersResponse])
                res.list_manual_triggers_response = out

        return res

    
    def displayvideo_advertisers_manual_triggers_patch(self, request: operations.DisplayvideoAdvertisersManualTriggersPatchRequest) -> operations.DisplayvideoAdvertisersManualTriggersPatchResponse:
        r"""Updates a manual trigger. Returns the updated manual trigger if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/manualTriggers/{triggerId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersManualTriggersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManualTrigger])
                res.manual_trigger = out

        return res

    
    def displayvideo_advertisers_negative_keyword_lists_create(self, request: operations.DisplayvideoAdvertisersNegativeKeywordListsCreateRequest) -> operations.DisplayvideoAdvertisersNegativeKeywordListsCreateResponse:
        r"""Creates a new negative keyword list. Returns the newly created negative keyword list if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/negativeKeywordLists", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersNegativeKeywordListsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NegativeKeywordList])
                res.negative_keyword_list = out

        return res

    
    def displayvideo_advertisers_negative_keyword_lists_list(self, request: operations.DisplayvideoAdvertisersNegativeKeywordListsListRequest) -> operations.DisplayvideoAdvertisersNegativeKeywordListsListResponse:
        r"""Lists negative keyword lists based on a given advertiser id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/negativeKeywordLists", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersNegativeKeywordListsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNegativeKeywordListsResponse])
                res.list_negative_keyword_lists_response = out

        return res

    
    def displayvideo_advertisers_negative_keyword_lists_negative_keywords_bulk_edit(self, request: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest) -> operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse:
        r"""Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:bulkEdit", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditNegativeKeywordsResponse])
                res.bulk_edit_negative_keywords_response = out

        return res

    
    def displayvideo_advertisers_negative_keyword_lists_negative_keywords_delete(self, request: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest) -> operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse:
        r"""Deletes a negative keyword from a negative keyword list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords/{keywordValue}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_negative_keyword_lists_negative_keywords_list(self, request: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListRequest) -> operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse:
        r"""Lists negative keywords in a negative keyword list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNegativeKeywordsResponse])
                res.list_negative_keywords_response = out

        return res

    
    def displayvideo_advertisers_negative_keyword_lists_negative_keywords_replace(self, request: operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest) -> operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse:
        r"""Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:replace", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReplaceNegativeKeywordsResponse])
                res.replace_negative_keywords_response = out

        return res

    
    def displayvideo_advertisers_negative_keyword_lists_patch(self, request: operations.DisplayvideoAdvertisersNegativeKeywordListsPatchRequest) -> operations.DisplayvideoAdvertisersNegativeKeywordListsPatchResponse:
        r"""Updates a negative keyword list. Returns the updated negative keyword list if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersNegativeKeywordListsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NegativeKeywordList])
                res.negative_keyword_list = out

        return res

    
    def displayvideo_advertisers_patch(self, request: operations.DisplayvideoAdvertisersPatchRequest) -> operations.DisplayvideoAdvertisersPatchResponse:
        r"""Updates an existing advertiser. Returns the updated advertiser if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Advertiser])
                res.advertiser = out

        return res

    
    def displayvideo_advertisers_targeting_types_assigned_targeting_options_create(self, request: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest) -> operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse:
        r"""Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_advertisers_targeting_types_assigned_targeting_options_delete(self, request: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest) -> operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse:
        r"""Deletes an assigned targeting option from an advertiser.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_advertisers_targeting_types_assigned_targeting_options_get(self, request: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest) -> operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse:
        r"""Gets a single targeting option assigned to an advertiser.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_advertisers_targeting_types_assigned_targeting_options_list(self, request: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest) -> operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse:
        r"""Lists the targeting options assigned to an advertiser.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAdvertiserAssignedTargetingOptionsResponse])
                res.list_advertiser_assigned_targeting_options_response = out

        return res

    