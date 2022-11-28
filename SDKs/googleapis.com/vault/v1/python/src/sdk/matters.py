import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Matters:
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

    
    def vault_matters_add_permissions(self, request: operations.VaultMattersAddPermissionsRequest) -> operations.VaultMattersAddPermissionsResponse:
        r"""Adds an account as a matter collaborator.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}:addPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersAddPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MatterPermission])
                res.matter_permission = out

        return res

    
    def vault_matters_close(self, request: operations.VaultMattersCloseRequest) -> operations.VaultMattersCloseResponse:
        r"""Closes the specified matter. Returns the matter with updated state.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}:close", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersCloseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CloseMatterResponse])
                res.close_matter_response = out

        return res

    
    def vault_matters_count(self, request: operations.VaultMattersCountRequest) -> operations.VaultMattersCountResponse:
        r"""Counts the accounts processed by the specified query.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}:count", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vault_matters_create(self, request: operations.VaultMattersCreateRequest) -> operations.VaultMattersCreateResponse:
        r"""Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/matters"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Matter])
                res.matter = out

        return res

    
    def vault_matters_delete(self, request: operations.VaultMattersDeleteRequest) -> operations.VaultMattersDeleteResponse:
        r"""Deletes the specified matter. Returns the matter with updated state.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Matter])
                res.matter = out

        return res

    
    def vault_matters_exports_create(self, request: operations.VaultMattersExportsCreateRequest) -> operations.VaultMattersExportsCreateResponse:
        r"""Creates an export.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/exports", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersExportsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Export])
                res.export = out

        return res

    
    def vault_matters_exports_delete(self, request: operations.VaultMattersExportsDeleteRequest) -> operations.VaultMattersExportsDeleteResponse:
        r"""Deletes an export.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/exports/{exportId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersExportsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def vault_matters_exports_get(self, request: operations.VaultMattersExportsGetRequest) -> operations.VaultMattersExportsGetResponse:
        r"""Gets an export.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/exports/{exportId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersExportsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Export])
                res.export = out

        return res

    
    def vault_matters_exports_list(self, request: operations.VaultMattersExportsListRequest) -> operations.VaultMattersExportsListResponse:
        r"""Lists details about the exports in the specified matter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/exports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersExportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListExportsResponse])
                res.list_exports_response = out

        return res

    
    def vault_matters_get(self, request: operations.VaultMattersGetRequest) -> operations.VaultMattersGetResponse:
        r"""Gets the specified matter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Matter])
                res.matter = out

        return res

    
    def vault_matters_holds_accounts_create(self, request: operations.VaultMattersHoldsAccountsCreateRequest) -> operations.VaultMattersHoldsAccountsCreateResponse:
        r"""Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/holds/{holdId}/accounts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersHoldsAccountsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HeldAccount])
                res.held_account = out

        return res

    
    def vault_matters_holds_accounts_delete(self, request: operations.VaultMattersHoldsAccountsDeleteRequest) -> operations.VaultMattersHoldsAccountsDeleteResponse:
        r"""Removes an account from a hold.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersHoldsAccountsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def vault_matters_holds_accounts_list(self, request: operations.VaultMattersHoldsAccountsListRequest) -> operations.VaultMattersHoldsAccountsListResponse:
        r"""Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/holds/{holdId}/accounts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersHoldsAccountsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListHeldAccountsResponse])
                res.list_held_accounts_response = out

        return res

    
    def vault_matters_holds_add_held_accounts(self, request: operations.VaultMattersHoldsAddHeldAccountsRequest) -> operations.VaultMattersHoldsAddHeldAccountsResponse:
        r"""Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/holds/{holdId}:addHeldAccounts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersHoldsAddHeldAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddHeldAccountsResponse])
                res.add_held_accounts_response = out

        return res

    
    def vault_matters_holds_create(self, request: operations.VaultMattersHoldsCreateRequest) -> operations.VaultMattersHoldsCreateResponse:
        r"""Creates a hold in the specified matter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/holds", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersHoldsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Hold])
                res.hold = out

        return res

    
    def vault_matters_holds_delete(self, request: operations.VaultMattersHoldsDeleteRequest) -> operations.VaultMattersHoldsDeleteResponse:
        r"""Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/holds/{holdId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersHoldsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def vault_matters_holds_get(self, request: operations.VaultMattersHoldsGetRequest) -> operations.VaultMattersHoldsGetResponse:
        r"""Gets the specified hold.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/holds/{holdId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersHoldsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Hold])
                res.hold = out

        return res

    
    def vault_matters_holds_list(self, request: operations.VaultMattersHoldsListRequest) -> operations.VaultMattersHoldsListResponse:
        r"""Lists the holds in a matter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/holds", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersHoldsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListHoldsResponse])
                res.list_holds_response = out

        return res

    
    def vault_matters_holds_remove_held_accounts(self, request: operations.VaultMattersHoldsRemoveHeldAccountsRequest) -> operations.VaultMattersHoldsRemoveHeldAccountsResponse:
        r"""Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/holds/{holdId}:removeHeldAccounts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersHoldsRemoveHeldAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RemoveHeldAccountsResponse])
                res.remove_held_accounts_response = out

        return res

    
    def vault_matters_holds_update(self, request: operations.VaultMattersHoldsUpdateRequest) -> operations.VaultMattersHoldsUpdateResponse:
        r"""Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/holds/{holdId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersHoldsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Hold])
                res.hold = out

        return res

    
    def vault_matters_list(self, request: operations.VaultMattersListRequest) -> operations.VaultMattersListResponse:
        r"""Lists matters the requestor has access to.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/matters"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListMattersResponse])
                res.list_matters_response = out

        return res

    
    def vault_matters_remove_permissions(self, request: operations.VaultMattersRemovePermissionsRequest) -> operations.VaultMattersRemovePermissionsResponse:
        r"""Removes an account as a matter collaborator.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}:removePermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersRemovePermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def vault_matters_reopen(self, request: operations.VaultMattersReopenRequest) -> operations.VaultMattersReopenResponse:
        r"""Reopens the specified matter. Returns the matter with updated state.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}:reopen", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersReopenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReopenMatterResponse])
                res.reopen_matter_response = out

        return res

    
    def vault_matters_saved_queries_create(self, request: operations.VaultMattersSavedQueriesCreateRequest) -> operations.VaultMattersSavedQueriesCreateResponse:
        r"""Creates a saved query.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/savedQueries", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersSavedQueriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SavedQuery])
                res.saved_query = out

        return res

    
    def vault_matters_saved_queries_delete(self, request: operations.VaultMattersSavedQueriesDeleteRequest) -> operations.VaultMattersSavedQueriesDeleteResponse:
        r"""Deletes the specified saved query.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/savedQueries/{savedQueryId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersSavedQueriesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def vault_matters_saved_queries_get(self, request: operations.VaultMattersSavedQueriesGetRequest) -> operations.VaultMattersSavedQueriesGetResponse:
        r"""Retrieves the specified saved query.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/savedQueries/{savedQueryId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersSavedQueriesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SavedQuery])
                res.saved_query = out

        return res

    
    def vault_matters_saved_queries_list(self, request: operations.VaultMattersSavedQueriesListRequest) -> operations.VaultMattersSavedQueriesListResponse:
        r"""Lists the saved queries in a matter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}/savedQueries", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersSavedQueriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSavedQueriesResponse])
                res.list_saved_queries_response = out

        return res

    
    def vault_matters_undelete(self, request: operations.VaultMattersUndeleteRequest) -> operations.VaultMattersUndeleteResponse:
        r"""Undeletes the specified matter. Returns the matter with updated state.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}:undelete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersUndeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Matter])
                res.matter = out

        return res

    
    def vault_matters_update(self, request: operations.VaultMattersUpdateRequest) -> operations.VaultMattersUpdateResponse:
        r"""Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/matters/{matterId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VaultMattersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Matter])
                res.matter = out

        return res

    