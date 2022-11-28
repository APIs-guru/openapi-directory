import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class FloodlightActivityGroups:
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

    
    def dfareporting_floodlight_activity_groups_get(self, request: operations.DfareportingFloodlightActivityGroupsGetRequest) -> operations.DfareportingFloodlightActivityGroupsGetResponse:
        r"""Gets one floodlight activity group by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightActivityGroups/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightActivityGroupsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightActivityGroup])
                res.floodlight_activity_group = out

        return res

    
    def dfareporting_floodlight_activity_groups_insert(self, request: operations.DfareportingFloodlightActivityGroupsInsertRequest) -> operations.DfareportingFloodlightActivityGroupsInsertResponse:
        r"""Inserts a new floodlight activity group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightActivityGroups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightActivityGroupsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightActivityGroup])
                res.floodlight_activity_group = out

        return res

    
    def dfareporting_floodlight_activity_groups_list(self, request: operations.DfareportingFloodlightActivityGroupsListRequest) -> operations.DfareportingFloodlightActivityGroupsListResponse:
        r"""Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightActivityGroups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightActivityGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightActivityGroupsListResponse])
                res.floodlight_activity_groups_list_response = out

        return res

    
    def dfareporting_floodlight_activity_groups_patch(self, request: operations.DfareportingFloodlightActivityGroupsPatchRequest) -> operations.DfareportingFloodlightActivityGroupsPatchResponse:
        r"""Updates an existing floodlight activity group. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightActivityGroups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightActivityGroupsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightActivityGroup])
                res.floodlight_activity_group = out

        return res

    
    def dfareporting_floodlight_activity_groups_update(self, request: operations.DfareportingFloodlightActivityGroupsUpdateRequest) -> operations.DfareportingFloodlightActivityGroupsUpdateResponse:
        r"""Updates an existing floodlight activity group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightActivityGroups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightActivityGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightActivityGroup])
                res.floodlight_activity_group = out

        return res

    