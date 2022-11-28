import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CreativeFieldValues:
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

    
    def dfareporting_creative_field_values_delete(self, request: operations.DfareportingCreativeFieldValuesDeleteRequest) -> operations.DfareportingCreativeFieldValuesDeleteResponse:
        r"""Deletes an existing creative field value.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingCreativeFieldValuesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def dfareporting_creative_field_values_get(self, request: operations.DfareportingCreativeFieldValuesGetRequest) -> operations.DfareportingCreativeFieldValuesGetResponse:
        r"""Gets one creative field value by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingCreativeFieldValuesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreativeFieldValue])
                res.creative_field_value = out

        return res

    
    def dfareporting_creative_field_values_insert(self, request: operations.DfareportingCreativeFieldValuesInsertRequest) -> operations.DfareportingCreativeFieldValuesInsertResponse:
        r"""Inserts a new creative field value.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingCreativeFieldValuesInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreativeFieldValue])
                res.creative_field_value = out

        return res

    
    def dfareporting_creative_field_values_list(self, request: operations.DfareportingCreativeFieldValuesListRequest) -> operations.DfareportingCreativeFieldValuesListResponse:
        r"""Retrieves a list of creative field values, possibly filtered. This method supports paging.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingCreativeFieldValuesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreativeFieldValuesListResponse])
                res.creative_field_values_list_response = out

        return res

    
    def dfareporting_creative_field_values_patch(self, request: operations.DfareportingCreativeFieldValuesPatchRequest) -> operations.DfareportingCreativeFieldValuesPatchResponse:
        r"""Updates an existing creative field value. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingCreativeFieldValuesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreativeFieldValue])
                res.creative_field_value = out

        return res

    
    def dfareporting_creative_field_values_update(self, request: operations.DfareportingCreativeFieldValuesUpdateRequest) -> operations.DfareportingCreativeFieldValuesUpdateResponse:
        r"""Updates an existing creative field value.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingCreativeFieldValuesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreativeFieldValue])
                res.creative_field_value = out

        return res

    