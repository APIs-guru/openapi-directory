import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.hubapi.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def delete_crm_v3_extensions_cards_app_id_card_id_archive(self, request: operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveRequest) -> operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/crm/v3/extensions/cards/{appId}/{cardId}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_crm_v3_extensions_cards_sample_response_get_cards_sample_response(self) -> operations.GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/crm/v3/extensions/cards/sample-response"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IntegratorCardPayloadResponse])
                res.integrator_card_payload_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_crm_v3_extensions_cards_app_id_card_id_get_by_id(self, request: operations.GetCrmV3ExtensionsCardsAppIDCardIDGetByIDRequest) -> operations.GetCrmV3ExtensionsCardsAppIDCardIDGetByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/crm/v3/extensions/cards/{appId}/{cardId}", request.path_params)

        client = utils.configure_security_client(request.security)

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/crm/v3/extensions/cards/{appId}", request.path_params)

        client = utils.configure_security_client(request.security)

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/crm/v3/extensions/cards/{appId}/{cardId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/crm/v3/extensions/cards/{appId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = utils.configure_security_client(request.security)

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

    