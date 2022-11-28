import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Ccc:
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

    
    def get_commercial_credit_cards(self, request: operations.GetCommercialCreditCardsRequest) -> operations.GetCommercialCreditCardsResponse:
        r"""Gets a list of all `Commerical Credit Card` objects.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/commercial-credit-cards"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommercialCreditCardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSON])
                res.get_commercial_credit_cards_200_application_prs_openbanking_opendata_v1_3_plus_json_object = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCommercialCreditCards400ErrorObject])
                res.four_hundred_error_object = out
        elif r.status_code == 408:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCommercialCreditCards408ErrorObject])
                res.four_hundred_and_eight_error_object = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCommercialCreditCards429ErrorObject])
                res.four_hundred_and_twenty_nine_error_object = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCommercialCreditCards500ErrorObject])
                res.five_hundred_error_object = out
        elif r.status_code == 503:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCommercialCreditCards503ErrorObject])
                res.five_hundred_and_three_error_object = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCommercialCreditCardsErrorObject])
                res.error_object = out

        return res

    
    def head_commercial_credit_cards(self, request: operations.HeadCommercialCreditCardsRequest) -> operations.HeadCommercialCreditCardsResponse:
        r"""Gets header information on the current set of `Commerical Credit Card` data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/commercial-credit-cards"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("HEAD", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadCommercialCreditCardsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.no_response = out

        return res

    