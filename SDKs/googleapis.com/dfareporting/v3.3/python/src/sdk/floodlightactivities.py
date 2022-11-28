import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class FloodlightActivities:
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

    
    def dfareporting_floodlight_activities_delete(self, request: operations.DfareportingFloodlightActivitiesDeleteRequest) -> operations.DfareportingFloodlightActivitiesDeleteResponse:
        r"""Deletes an existing floodlight activity.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightActivities/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightActivitiesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def dfareporting_floodlight_activities_generatetag(self, request: operations.DfareportingFloodlightActivitiesGeneratetagRequest) -> operations.DfareportingFloodlightActivitiesGeneratetagResponse:
        r"""Generates a tag for a floodlight activity.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightActivities/generatetag", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightActivitiesGeneratetagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightActivitiesGenerateTagResponse])
                res.floodlight_activities_generate_tag_response = out

        return res

    
    def dfareporting_floodlight_activities_get(self, request: operations.DfareportingFloodlightActivitiesGetRequest) -> operations.DfareportingFloodlightActivitiesGetResponse:
        r"""Gets one floodlight activity by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightActivities/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightActivitiesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightActivity])
                res.floodlight_activity = out

        return res

    
    def dfareporting_floodlight_activities_insert(self, request: operations.DfareportingFloodlightActivitiesInsertRequest) -> operations.DfareportingFloodlightActivitiesInsertResponse:
        r"""Inserts a new floodlight activity.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightActivities", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightActivitiesInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightActivity])
                res.floodlight_activity = out

        return res

    
    def dfareporting_floodlight_activities_list(self, request: operations.DfareportingFloodlightActivitiesListRequest) -> operations.DfareportingFloodlightActivitiesListResponse:
        r"""Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightActivities", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightActivitiesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightActivitiesListResponse])
                res.floodlight_activities_list_response = out

        return res

    
    def dfareporting_floodlight_activities_patch(self, request: operations.DfareportingFloodlightActivitiesPatchRequest) -> operations.DfareportingFloodlightActivitiesPatchResponse:
        r"""Updates an existing floodlight activity. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightActivities", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightActivitiesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightActivity])
                res.floodlight_activity = out

        return res

    
    def dfareporting_floodlight_activities_update(self, request: operations.DfareportingFloodlightActivitiesUpdateRequest) -> operations.DfareportingFloodlightActivitiesUpdateResponse:
        r"""Updates an existing floodlight activity.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightActivities", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightActivitiesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightActivity])
                res.floodlight_activity = out

        return res

    