import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Liasettings:
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

    
    def content_liasettings_custombatch(self, request: operations.ContentLiasettingsCustombatchRequest) -> operations.ContentLiasettingsCustombatchResponse:
        r"""Retrieves and/or updates the LIA settings of multiple accounts in a single request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/liasettings/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentLiasettingsCustombatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiasettingsCustomBatchResponse])
                res.liasettings_custom_batch_response = out

        return res

    
    def content_liasettings_get(self, request: operations.ContentLiasettingsGetRequest) -> operations.ContentLiasettingsGetResponse:
        r"""Retrieves the LIA settings of the account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/liasettings/{accountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentLiasettingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiaSettings])
                res.lia_settings = out

        return res

    
    def content_liasettings_getaccessiblegmbaccounts(self, request: operations.ContentLiasettingsGetaccessiblegmbaccountsRequest) -> operations.ContentLiasettingsGetaccessiblegmbaccountsResponse:
        r"""Retrieves the list of accessible Google My Business accounts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/liasettings/{accountId}/accessiblegmbaccounts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentLiasettingsGetaccessiblegmbaccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiasettingsGetAccessibleGmbAccountsResponse])
                res.liasettings_get_accessible_gmb_accounts_response = out

        return res

    
    def content_liasettings_list(self, request: operations.ContentLiasettingsListRequest) -> operations.ContentLiasettingsListResponse:
        r"""Lists the LIA settings of the sub-accounts in your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/liasettings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentLiasettingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiasettingsListResponse])
                res.liasettings_list_response = out

        return res

    
    def content_liasettings_listposdataproviders(self, request: operations.ContentLiasettingsListposdataprovidersRequest) -> operations.ContentLiasettingsListposdataprovidersResponse:
        r"""Retrieves the list of POS data providers that have active settings for the all eiligible countries.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/liasettings/posdataproviders"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentLiasettingsListposdataprovidersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiasettingsListPosDataProvidersResponse])
                res.liasettings_list_pos_data_providers_response = out

        return res

    
    def content_liasettings_requestgmbaccess(self, request: operations.ContentLiasettingsRequestgmbaccessRequest) -> operations.ContentLiasettingsRequestgmbaccessResponse:
        r"""Requests access to a specified Google My Business account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/liasettings/{accountId}/requestgmbaccess", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentLiasettingsRequestgmbaccessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiasettingsRequestGmbAccessResponse])
                res.liasettings_request_gmb_access_response = out

        return res

    
    def content_liasettings_requestinventoryverification(self, request: operations.ContentLiasettingsRequestinventoryverificationRequest) -> operations.ContentLiasettingsRequestinventoryverificationResponse:
        r"""Requests inventory validation for the specified country.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/liasettings/{accountId}/requestinventoryverification/{country}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentLiasettingsRequestinventoryverificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiasettingsRequestInventoryVerificationResponse])
                res.liasettings_request_inventory_verification_response = out

        return res

    
    def content_liasettings_setinventoryverificationcontact(self, request: operations.ContentLiasettingsSetinventoryverificationcontactRequest) -> operations.ContentLiasettingsSetinventoryverificationcontactResponse:
        r"""Sets the inventory verification contract for the specified country.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/liasettings/{accountId}/setinventoryverificationcontact", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentLiasettingsSetinventoryverificationcontactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiasettingsSetInventoryVerificationContactResponse])
                res.liasettings_set_inventory_verification_contact_response = out

        return res

    
    def content_liasettings_setposdataprovider(self, request: operations.ContentLiasettingsSetposdataproviderRequest) -> operations.ContentLiasettingsSetposdataproviderResponse:
        r"""Sets the POS data provider for the specified country.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/liasettings/{accountId}/setposdataprovider", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentLiasettingsSetposdataproviderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiasettingsSetPosDataProviderResponse])
                res.liasettings_set_pos_data_provider_response = out

        return res

    
    def content_liasettings_update(self, request: operations.ContentLiasettingsUpdateRequest) -> operations.ContentLiasettingsUpdateResponse:
        r"""Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/liasettings/{accountId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentLiasettingsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiaSettings])
                res.lia_settings = out

        return res

    