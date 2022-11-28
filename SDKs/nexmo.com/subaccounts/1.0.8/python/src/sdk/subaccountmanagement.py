import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class SubaccountManagement:
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

    
    def create_sub_account(self, request: operations.CreateSubAccountRequest) -> operations.CreateSubAccountResponse:
        r"""Create subaccount
        Create a subaccount for a given primary account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{api_key}/subaccounts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSubAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubaccountCreateResponse])
                res.subaccount_create_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSubAccount401ApplicationJSON])
                res.create_sub_account_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnprovisionedErrorResponse])
                res.unprovisioned_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSubAccount404ApplicationJSON])
                res.create_sub_account_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSubAccount422ApplicationJSON])
                res.create_sub_account_422_application_json_object = out

        return res

    
    def modify_subaccount(self, request: operations.ModifySubaccountRequest) -> operations.ModifySubaccountResponse:
        r"""Modify a subaccount
        Change one or more properties of a subaccount.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{api_key}/subaccounts/{subaccount_key}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifySubaccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.subaccount_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ModifySubaccount401ApplicationJSON])
                res.modify_subaccount_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnprovisionedErrorResponse])
                res.unprovisioned_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ModifySubaccount404ApplicationJSON])
                res.modify_subaccount_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ModifySubaccount422ApplicationJSON])
                res.modify_subaccount_422_application_json_object = out

        return res

    
    def retrieve_subaccount(self, request: operations.RetrieveSubaccountRequest) -> operations.RetrieveSubaccountResponse:
        r"""Retrieve a subaccount
        Get the information of a subaccount specified with its API key.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{api_key}/subaccounts/{subaccount_key}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveSubaccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.subaccount_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RetrieveSubaccount401ApplicationJSON])
                res.retrieve_subaccount_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnprovisionedErrorResponse])
                res.unprovisioned_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RetrieveSubaccount404ApplicationJSON])
                res.retrieve_subaccount_404_application_json_object = out

        return res

    
    def retrieve_subaccounts_list(self, request: operations.RetrieveSubaccountsListRequest) -> operations.RetrieveSubaccountsListResponse:
        r"""Retrieve list of subaccounts
        Get the information of all the subaccounts owned by the primary account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{api_key}/subaccounts", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveSubaccountsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.subaccounts_all_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RetrieveSubaccountsList401ApplicationJSON])
                res.retrieve_subaccounts_list_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnprovisionedErrorResponse])
                res.unprovisioned_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RetrieveSubaccountsList404ApplicationJSON])
                res.retrieve_subaccounts_list_404_application_json_object = out

        return res

    