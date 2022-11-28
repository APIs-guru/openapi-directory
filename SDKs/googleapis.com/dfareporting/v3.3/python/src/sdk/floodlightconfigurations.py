import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class FloodlightConfigurations:
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

    
    def dfareporting_floodlight_configurations_get(self, request: operations.DfareportingFloodlightConfigurationsGetRequest) -> operations.DfareportingFloodlightConfigurationsGetResponse:
        r"""Gets one floodlight configuration by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightConfigurations/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightConfigurationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightConfiguration])
                res.floodlight_configuration = out

        return res

    
    def dfareporting_floodlight_configurations_list(self, request: operations.DfareportingFloodlightConfigurationsListRequest) -> operations.DfareportingFloodlightConfigurationsListResponse:
        r"""Retrieves a list of floodlight configurations, possibly filtered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightConfigurations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightConfigurationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightConfigurationsListResponse])
                res.floodlight_configurations_list_response = out

        return res

    
    def dfareporting_floodlight_configurations_patch(self, request: operations.DfareportingFloodlightConfigurationsPatchRequest) -> operations.DfareportingFloodlightConfigurationsPatchResponse:
        r"""Updates an existing floodlight configuration. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightConfigurations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightConfigurationsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightConfiguration])
                res.floodlight_configuration = out

        return res

    
    def dfareporting_floodlight_configurations_update(self, request: operations.DfareportingFloodlightConfigurationsUpdateRequest) -> operations.DfareportingFloodlightConfigurationsUpdateResponse:
        r"""Updates an existing floodlight configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/floodlightConfigurations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingFloodlightConfigurationsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FloodlightConfiguration])
                res.floodlight_configuration = out

        return res

    