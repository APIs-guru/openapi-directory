import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Debug:
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

    
    def cloudsearch_debug_datasources_items_check_access(self, request: operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest) -> operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse:
        r"""Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debug/{name}:checkAccess", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckAccessResponse])
                res.check_access_response = out

        return res

    
    def cloudsearch_debug_datasources_items_search_by_view_url(self, request: operations.CloudsearchDebugDatasourcesItemsSearchByViewURLRequest) -> operations.CloudsearchDebugDatasourcesItemsSearchByViewURLResponse:
        r"""Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debug/{name}/items:searchByViewUrl", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchDebugDatasourcesItemsSearchByViewURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchItemsByViewURLResponse])
                res.search_items_by_view_url_response = out

        return res

    
    def cloudsearch_debug_identitysources_items_list_forunmappedidentity(self, request: operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest) -> operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse:
        r"""Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debug/{parent}/items:forunmappedidentity", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListItemNamesForUnmappedIdentityResponse])
                res.list_item_names_for_unmapped_identity_response = out

        return res

    
    def cloudsearch_debug_identitysources_unmappedids_list(self, request: operations.CloudsearchDebugIdentitysourcesUnmappedidsListRequest) -> operations.CloudsearchDebugIdentitysourcesUnmappedidsListResponse:
        r"""Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/debug/{parent}/unmappedids", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchDebugIdentitysourcesUnmappedidsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListUnmappedIdentitiesResponse])
                res.list_unmapped_identities_response = out

        return res

    