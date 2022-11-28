import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Partners:
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

    
    def displayvideo_partners_bulk_edit_partner_assigned_targeting_options(self, request: operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsRequest) -> operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsResponse:
        r"""Bulk edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}:bulkEditPartnerAssignedTargetingOptions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditPartnerAssignedTargetingOptionsResponse])
                res.bulk_edit_partner_assigned_targeting_options_response = out

        return res

    
    def displayvideo_partners_channels_create(self, request: operations.DisplayvideoPartnersChannelsCreateRequest) -> operations.DisplayvideoPartnersChannelsCreateResponse:
        r"""Creates a new channel. Returns the newly created channel if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/channels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersChannelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    
    def displayvideo_partners_channels_list(self, request: operations.DisplayvideoPartnersChannelsListRequest) -> operations.DisplayvideoPartnersChannelsListResponse:
        r"""Lists channels for a partner or advertiser.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/channels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersChannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListChannelsResponse])
                res.list_channels_response = out

        return res

    
    def displayvideo_partners_channels_patch(self, request: operations.DisplayvideoPartnersChannelsPatchRequest) -> operations.DisplayvideoPartnersChannelsPatchResponse:
        r"""Updates a channel. Returns the updated channel if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/channels/{channelId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersChannelsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    
    def displayvideo_partners_channels_sites_bulk_edit(self, request: operations.DisplayvideoPartnersChannelsSitesBulkEditRequest) -> operations.DisplayvideoPartnersChannelsSitesBulkEditResponse:
        r"""Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/channels/{channelId}/sites:bulkEdit", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersChannelsSitesBulkEditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BulkEditSitesResponse])
                res.bulk_edit_sites_response = out

        return res

    
    def displayvideo_partners_channels_sites_delete(self, request: operations.DisplayvideoPartnersChannelsSitesDeleteRequest) -> operations.DisplayvideoPartnersChannelsSitesDeleteResponse:
        r"""Deletes a site from a channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/channels/{channelId}/sites/{urlOrAppId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersChannelsSitesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_partners_channels_sites_list(self, request: operations.DisplayvideoPartnersChannelsSitesListRequest) -> operations.DisplayvideoPartnersChannelsSitesListResponse:
        r"""Lists sites in a channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/channels/{channelId}/sites", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersChannelsSitesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSitesResponse])
                res.list_sites_response = out

        return res

    
    def displayvideo_partners_channels_sites_replace(self, request: operations.DisplayvideoPartnersChannelsSitesReplaceRequest) -> operations.DisplayvideoPartnersChannelsSitesReplaceResponse:
        r"""Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/channels/{channelId}/sites:replace", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersChannelsSitesReplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReplaceSitesResponse])
                res.replace_sites_response = out

        return res

    
    def displayvideo_partners_get(self, request: operations.DisplayvideoPartnersGetRequest) -> operations.DisplayvideoPartnersGetResponse:
        r"""Gets a partner.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Partner])
                res.partner = out

        return res

    
    def displayvideo_partners_list(self, request: operations.DisplayvideoPartnersListRequest) -> operations.DisplayvideoPartnersListResponse:
        r"""Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/partners"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPartnersResponse])
                res.list_partners_response = out

        return res

    
    def displayvideo_partners_targeting_types_assigned_targeting_options_create(self, request: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest) -> operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse:
        r"""Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_partners_targeting_types_assigned_targeting_options_delete(self, request: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest) -> operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse:
        r"""Deletes an assigned targeting option from a partner.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def displayvideo_partners_targeting_types_assigned_targeting_options_get(self, request: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest) -> operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse:
        r"""Gets a single targeting option assigned to a partner.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignedTargetingOption])
                res.assigned_targeting_option = out

        return res

    
    def displayvideo_partners_targeting_types_assigned_targeting_options_list(self, request: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest) -> operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse:
        r"""Lists the targeting options assigned to a partner.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPartnerAssignedTargetingOptionsResponse])
                res.list_partner_assigned_targeting_options_response = out

        return res

    