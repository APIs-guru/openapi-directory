import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SampleResponse:
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

    
    def get_crm_v3_extensions_cards_sample_response_get_cards_sample_response(self) -> operations.GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse:
        r"""Get sample card detail response
        Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crm/v3/extensions/cards/sample-response"
        
        
        client = self._client
        
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

    