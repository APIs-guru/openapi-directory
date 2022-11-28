import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Settings:
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

    
    def cloudsearch_settings_datasources_create(self, request: operations.CloudsearchSettingsDatasourcesCreateRequest) -> operations.CloudsearchSettingsDatasourcesCreateResponse:
        r"""Creates a datasource. **Note:** This API requires an admin account to execute.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/settings/datasources"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchSettingsDatasourcesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudsearch_settings_datasources_list(self, request: operations.CloudsearchSettingsDatasourcesListRequest) -> operations.CloudsearchSettingsDatasourcesListResponse:
        r"""Lists datasources. **Note:** This API requires an admin account to execute.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/settings/datasources"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchSettingsDatasourcesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDataSourceResponse])
                res.list_data_source_response = out

        return res

    
    def cloudsearch_settings_get_customer(self, request: operations.CloudsearchSettingsGetCustomerRequest) -> operations.CloudsearchSettingsGetCustomerResponse:
        r"""Get customer settings. **Note:** This API requires an admin account to execute.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/settings/customer"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchSettingsGetCustomerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerSettings])
                res.customer_settings = out

        return res

    
    def cloudsearch_settings_searchapplications_create(self, request: operations.CloudsearchSettingsSearchapplicationsCreateRequest) -> operations.CloudsearchSettingsSearchapplicationsCreateResponse:
        r"""Creates a search application. **Note:** This API requires an admin account to execute.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/settings/searchapplications"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchSettingsSearchapplicationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudsearch_settings_searchapplications_delete(self, request: operations.CloudsearchSettingsSearchapplicationsDeleteRequest) -> operations.CloudsearchSettingsSearchapplicationsDeleteResponse:
        r"""Deletes a search application. **Note:** This API requires an admin account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchSettingsSearchapplicationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudsearch_settings_searchapplications_get(self, request: operations.CloudsearchSettingsSearchapplicationsGetRequest) -> operations.CloudsearchSettingsSearchapplicationsGetResponse:
        r"""Gets the specified search application. **Note:** This API requires an admin account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchSettingsSearchapplicationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchApplication])
                res.search_application = out

        return res

    
    def cloudsearch_settings_searchapplications_list(self, request: operations.CloudsearchSettingsSearchapplicationsListRequest) -> operations.CloudsearchSettingsSearchapplicationsListResponse:
        r"""Lists all search applications. **Note:** This API requires an admin account to execute.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/settings/searchapplications"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchSettingsSearchapplicationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSearchApplicationsResponse])
                res.list_search_applications_response = out

        return res

    
    def cloudsearch_settings_searchapplications_patch(self, request: operations.CloudsearchSettingsSearchapplicationsPatchRequest) -> operations.CloudsearchSettingsSearchapplicationsPatchResponse:
        r"""Updates a search application. **Note:** This API requires an admin account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchSettingsSearchapplicationsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudsearch_settings_searchapplications_reset(self, request: operations.CloudsearchSettingsSearchapplicationsResetRequest) -> operations.CloudsearchSettingsSearchapplicationsResetResponse:
        r"""Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{name}:reset", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchSettingsSearchapplicationsResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudsearch_settings_searchapplications_update(self, request: operations.CloudsearchSettingsSearchapplicationsUpdateRequest) -> operations.CloudsearchSettingsSearchapplicationsUpdateResponse:
        r"""Updates a search application. **Note:** This API requires an admin account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchSettingsSearchapplicationsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudsearch_settings_update_customer(self, request: operations.CloudsearchSettingsUpdateCustomerRequest) -> operations.CloudsearchSettingsUpdateCustomerResponse:
        r"""Update customer settings. **Note:** This API requires an admin account to execute.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/settings/customer"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchSettingsUpdateCustomerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    