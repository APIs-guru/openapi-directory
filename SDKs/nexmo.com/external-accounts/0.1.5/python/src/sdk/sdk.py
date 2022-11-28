

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.nexmo.com/beta/chatapp-accounts",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def create_messenger_account(self, request: operations.CreateMessengerAccountRequest) -> operations.CreateMessengerAccountResponse:
        r"""Create a Messenger account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/messenger"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMessengerAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessengerAccountResponse])
                res.messenger_account_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateMessengerAccount400ApplicationJSON])
                res.create_messenger_account_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndOneResponse])
                res.four_hundred_and_one_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndThreeResponse])
                res.four_hundred_and_three_response = out

        return res

    
    def delete_messenger_account(self, request: operations.DeleteMessengerAccountRequest) -> operations.DeleteMessengerAccountResponse:
        r"""Delete a Messenger account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/messenger/{external_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMessengerAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndOneResponse])
                res.four_hundred_and_one_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndThreeResponse])
                res.four_hundred_and_three_response = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_all_accounts(self, request: operations.GetAllAccountsRequest) -> operations.GetAllAccountsResponse:
        r"""Retrieve all accounts you own
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAllAccounts200ApplicationJSON])
                res.get_all_accounts_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndOneResponse])
                res.four_hundred_and_one_response = out

        return res

    
    def get_messenger_account(self, request: operations.GetMessengerAccountRequest) -> operations.GetMessengerAccountResponse:
        r"""Retrieve a Messenger account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/messenger/{external_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMessengerAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessengerAccountResponse])
                res.messenger_account_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndOneResponse])
                res.four_hundred_and_one_response = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_vsm_account(self, request: operations.GetVsmAccountRequest) -> operations.GetVsmAccountResponse:
        r"""Retrieve a Viber Service Message account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/viber_service_msg/{external_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVsmAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VsmAccountResponse])
                res.vsm_account_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndOneResponse])
                res.four_hundred_and_one_response = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_wa_account(self, request: operations.GetWaAccountRequest) -> operations.GetWaAccountResponse:
        r"""Retrieve a Whatsapp account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/whatsapp/{external_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWaAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WaAccountResponse])
                res.wa_account_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndOneResponse])
                res.four_hundred_and_one_response = out
        elif r.status_code == 404:
            pass

        return res

    
    def link_application(self, request: operations.LinkApplicationRequest) -> operations.LinkApplicationResponse:
        r"""Link application to an account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{provider}/{external_id}/applications", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LinkApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountResponse])
                res.account_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndOneResponse])
                res.four_hundred_and_one_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.LinkApplication403ApplicationJSON])
                res.link_application_403_application_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.LinkApplication409ApplicationJSON])
                res.link_application_409_application_json_object = out

        return res

    
    def unli_without_applicationnk_application(self, request: operations.UnliWithoutApplicationnkApplicationRequest) -> operations.UnliWithoutApplicationnkApplicationResponse:
        r"""Unlink application from an account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{provider}/{external_id}/applications/{application_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnliWithoutApplicationnkApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndOneResponse])
                res.four_hundred_and_one_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UnliWithoutApplicationnkApplication403ApplicationJSON])
                res.unli_without_applicationnk_application_403_application_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UnliWithoutApplicationnkApplication409ApplicationJSON])
                res.unli_without_applicationnk_application_409_application_json_object = out

        return res

    
    def update_messenger_account(self, request: operations.UpdateMessengerAccountRequest) -> operations.UpdateMessengerAccountResponse:
        r"""Update a Messenger account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/messenger/{external_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMessengerAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateMessengerAccount200ApplicationJSON])
                res.update_messenger_account_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateMessengerAccount400ApplicationJSON])
                res.update_messenger_account_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndOneResponse])
                res.four_hundred_and_one_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndThreeResponse])
                res.four_hundred_and_three_response = out
        elif r.status_code == 404:
            pass

        return res

    