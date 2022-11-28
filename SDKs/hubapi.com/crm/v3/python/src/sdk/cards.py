import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Cards:
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

    
    def delete_crm_v3_extensions_cards_app_id_card_id_archive(self, request: operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveRequest) -> operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveResponse:
        r"""Delete a card
        Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can't be undone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/crm/v3/extensions/cards/{appId}/{cardId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_crm_v3_extensions_cards_app_id_card_id_get_by_id(self, request: operations.GetCrmV3ExtensionsCardsAppIDCardIDGetByIDRequest) -> operations.GetCrmV3ExtensionsCardsAppIDCardIDGetByIDResponse:
        r"""Get a card.
        Returns the definition for a card with the given ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/crm/v3/extensions/cards/{appId}/{cardId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCrmV3ExtensionsCardsAppIDCardIDGetByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CardResponse])
                res.card_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_crm_v3_extensions_cards_app_id_get_all(self, request: operations.GetCrmV3ExtensionsCardsAppIDGetAllRequest) -> operations.GetCrmV3ExtensionsCardsAppIDGetAllResponse:
        r"""Get all cards
        Returns a list of cards for a given app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/crm/v3/extensions/cards/{appId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCrmV3ExtensionsCardsAppIDGetAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CardListResponse])
                res.card_list_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_crm_v3_extensions_cards_app_id_card_id_update(self, request: operations.PatchCrmV3ExtensionsCardsAppIDCardIDUpdateRequest) -> operations.PatchCrmV3ExtensionsCardsAppIDCardIDUpdateResponse:
        r"""Update a card
        Update a card definition with new details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/crm/v3/extensions/cards/{appId}/{cardId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchCrmV3ExtensionsCardsAppIDCardIDUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CardResponse])
                res.card_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_crm_v3_extensions_cards_app_id_create(self, request: operations.PostCrmV3ExtensionsCardsAppIDCreateRequest) -> operations.PostCrmV3ExtensionsCardsAppIDCreateResponse:
        r"""Create a new card
        Defines a new card that will become active on an account when this app is installed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/crm/v3/extensions/cards/{appId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCrmV3ExtensionsCardsAppIDCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CardResponse])
                res.card_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    