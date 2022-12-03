import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Quotes:
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

    
    def get_quotes_quote_id(self, request: operations.GetQuotesQuoteIDRequest) -> operations.GetQuotesQuoteIDResponse:
        r"""/quotes/{quote_id}
        ### Get a quote
        
        Get the latest details for a specific [quote](https://www.heraldapi.com/docs/quotes) created by a `submission`. While a submission can contain many products, each quote is for a *single* product. A `quote_id` is created for each quote, located in the submission response. 
        
        > If you're looking to create a new quote with a carrier, you need to [create a submission](../reference/HeraldAPI.v1.yaml/paths/~1submissions/post) before retrieving quote details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/quotes/{quote_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuotesQuoteIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQuotesQuoteID200ApplicationJSON])
                res.get_quotes_quote_id_200_application_json_object = out

        return res

    