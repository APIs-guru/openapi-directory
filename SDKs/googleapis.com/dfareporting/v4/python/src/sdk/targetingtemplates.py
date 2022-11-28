import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class TargetingTemplates:
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

    
    def dfareporting_targeting_templates_get(self, request: operations.DfareportingTargetingTemplatesGetRequest) -> operations.DfareportingTargetingTemplatesGetResponse:
        r"""Gets one targeting template by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/targetingTemplates/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingTargetingTemplatesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TargetingTemplate])
                res.targeting_template = out

        return res

    
    def dfareporting_targeting_templates_insert(self, request: operations.DfareportingTargetingTemplatesInsertRequest) -> operations.DfareportingTargetingTemplatesInsertResponse:
        r"""Inserts a new targeting template.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/targetingTemplates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingTargetingTemplatesInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TargetingTemplate])
                res.targeting_template = out

        return res

    
    def dfareporting_targeting_templates_list(self, request: operations.DfareportingTargetingTemplatesListRequest) -> operations.DfareportingTargetingTemplatesListResponse:
        r"""Retrieves a list of targeting templates, optionally filtered. This method supports paging.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/targetingTemplates", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingTargetingTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TargetingTemplatesListResponse])
                res.targeting_templates_list_response = out

        return res

    
    def dfareporting_targeting_templates_patch(self, request: operations.DfareportingTargetingTemplatesPatchRequest) -> operations.DfareportingTargetingTemplatesPatchResponse:
        r"""Updates an existing targeting template. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/targetingTemplates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingTargetingTemplatesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TargetingTemplate])
                res.targeting_template = out

        return res

    
    def dfareporting_targeting_templates_update(self, request: operations.DfareportingTargetingTemplatesUpdateRequest) -> operations.DfareportingTargetingTemplatesUpdateResponse:
        r"""Updates an existing targeting template.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/targetingTemplates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingTargetingTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TargetingTemplate])
                res.targeting_template = out

        return res

    