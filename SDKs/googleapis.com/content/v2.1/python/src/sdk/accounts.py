import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Accounts:
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

    
    def content_accounts_authinfo(self, request: operations.ContentAccountsAuthinfoRequest) -> operations.ContentAccountsAuthinfoResponse:
        r"""Returns information about the authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts/authinfo"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsAuthinfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsAuthInfoResponse])
                res.accounts_auth_info_response = out

        return res

    
    def content_accounts_claimwebsite(self, request: operations.ContentAccountsClaimwebsiteRequest) -> operations.ContentAccountsClaimwebsiteResponse:
        r"""Claims the website of a Merchant Center sub-account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts/{accountId}/claimwebsite", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsClaimwebsiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsClaimWebsiteResponse])
                res.accounts_claim_website_response = out

        return res

    
    def content_accounts_credentials_create(self, request: operations.ContentAccountsCredentialsCreateRequest) -> operations.ContentAccountsCredentialsCreateResponse:
        r"""Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/credentials", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsCredentialsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountCredentials])
                res.account_credentials = out

        return res

    
    def content_accounts_custombatch(self, request: operations.ContentAccountsCustombatchRequest) -> operations.ContentAccountsCustombatchResponse:
        r"""Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsCustombatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsCustomBatchResponse])
                res.accounts_custom_batch_response = out

        return res

    
    def content_accounts_delete(self, request: operations.ContentAccountsDeleteRequest) -> operations.ContentAccountsDeleteResponse:
        r"""Deletes a Merchant Center sub-account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts/{accountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def content_accounts_get(self, request: operations.ContentAccountsGetRequest) -> operations.ContentAccountsGetResponse:
        r"""Retrieves a Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts/{accountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out

        return res

    
    def content_accounts_insert(self, request: operations.ContentAccountsInsertRequest) -> operations.ContentAccountsInsertResponse:
        r"""Creates a Merchant Center sub-account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out

        return res

    
    def content_accounts_labels_create(self, request: operations.ContentAccountsLabelsCreateRequest) -> operations.ContentAccountsLabelsCreateResponse:
        r"""Creates a new label, not assigned to any account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/labels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsLabelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountLabel])
                res.account_label = out

        return res

    
    def content_accounts_labels_delete(self, request: operations.ContentAccountsLabelsDeleteRequest) -> operations.ContentAccountsLabelsDeleteResponse:
        r"""Deletes a label and removes it from all accounts to which it was assigned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/labels/{labelId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsLabelsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def content_accounts_labels_list(self, request: operations.ContentAccountsLabelsListRequest) -> operations.ContentAccountsLabelsListResponse:
        r"""Lists the labels assigned to an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/labels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsLabelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAccountLabelsResponse])
                res.list_account_labels_response = out

        return res

    
    def content_accounts_labels_patch(self, request: operations.ContentAccountsLabelsPatchRequest) -> operations.ContentAccountsLabelsPatchResponse:
        r"""Updates a label.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/labels/{labelId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsLabelsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountLabel])
                res.account_label = out

        return res

    
    def content_accounts_link(self, request: operations.ContentAccountsLinkRequest) -> operations.ContentAccountsLinkResponse:
        r"""Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts/{accountId}/link", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsLinkResponse])
                res.accounts_link_response = out

        return res

    
    def content_accounts_list(self, request: operations.ContentAccountsListRequest) -> operations.ContentAccountsListResponse:
        r"""Lists the sub-accounts in your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsListResponse])
                res.accounts_list_response = out

        return res

    
    def content_accounts_listlinks(self, request: operations.ContentAccountsListlinksRequest) -> operations.ContentAccountsListlinksResponse:
        r"""Returns the list of accounts linked to your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts/{accountId}/listlinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsListlinksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsListLinksResponse])
                res.accounts_list_links_response = out

        return res

    
    def content_accounts_requestphoneverification(self, request: operations.ContentAccountsRequestphoneverificationRequest) -> operations.ContentAccountsRequestphoneverificationResponse:
        r"""Request verification code to start phone verification.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts/{accountId}/requestphoneverification", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsRequestphoneverificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RequestPhoneVerificationResponse])
                res.request_phone_verification_response = out

        return res

    
    def content_accounts_returncarrier_create(self, request: operations.ContentAccountsReturncarrierCreateRequest) -> operations.ContentAccountsReturncarrierCreateResponse:
        r"""Links return carrier to a merchant account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/returncarrier", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsReturncarrierCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountReturnCarrier])
                res.account_return_carrier = out

        return res

    
    def content_accounts_returncarrier_delete(self, request: operations.ContentAccountsReturncarrierDeleteRequest) -> operations.ContentAccountsReturncarrierDeleteResponse:
        r"""Delete a return carrier in the merchant account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/returncarrier/{carrierAccountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsReturncarrierDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def content_accounts_returncarrier_list(self, request: operations.ContentAccountsReturncarrierListRequest) -> operations.ContentAccountsReturncarrierListResponse:
        r"""Lists available return carriers in the merchant account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/returncarrier", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsReturncarrierListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAccountReturnCarrierResponse])
                res.list_account_return_carrier_response = out

        return res

    
    def content_accounts_returncarrier_patch(self, request: operations.ContentAccountsReturncarrierPatchRequest) -> operations.ContentAccountsReturncarrierPatchResponse:
        r"""Updates a return carrier in the merchant account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/returncarrier/{carrierAccountId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsReturncarrierPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountReturnCarrier])
                res.account_return_carrier = out

        return res

    
    def content_accounts_update(self, request: operations.ContentAccountsUpdateRequest) -> operations.ContentAccountsUpdateResponse:
        r"""Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts/{accountId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out

        return res

    
    def content_accounts_updatelabels(self, request: operations.ContentAccountsUpdatelabelsRequest) -> operations.ContentAccountsUpdatelabelsResponse:
        r"""Updates labels that are assigned to the Merchant Center account by CSS user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts/{accountId}/updatelabels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsUpdatelabelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsUpdateLabelsResponse])
                res.accounts_update_labels_response = out

        return res

    
    def content_accounts_verifyphonenumber(self, request: operations.ContentAccountsVerifyphonenumberRequest) -> operations.ContentAccountsVerifyphonenumberResponse:
        r"""Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts/{accountId}/verifyphonenumber", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsVerifyphonenumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyPhoneNumberResponse])
                res.verify_phone_number_response = out

        return res

    