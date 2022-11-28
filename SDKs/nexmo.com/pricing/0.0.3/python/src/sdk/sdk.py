

import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://rest.nexmo.com/account",
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
        
    
    
    
    def retrieve_prefix_pricing(self, request: operations.RetrievePrefixPricingRequest) -> operations.RetrievePrefixPricingResponse:
        r"""Retrieve outbound pricing for a specific dialing prefix.
        Retrieves the pricing information based on the dialing prefix.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/get-prefix-pricing/outbound/{type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrievePrefixPricingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pricing_countries_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RetrievePrefixPricing400ApplicationJSON])
                res.retrieve_prefix_pricing_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RetrievePrefixPricing401ApplicationJSON])
                res.retrieve_prefix_pricing_401_application_json_object = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def retrieve_pricing_all_countries(self, request: operations.RetrievePricingAllCountriesRequest) -> operations.RetrievePricingAllCountriesResponse:
        r"""Retrieve outbound pricing for all countries.
        Retrieves the pricing information for all countries.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/get-full-pricing/outbound/{type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrievePricingAllCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pricing_countries_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RetrievePricingAllCountries400ApplicationJSON])
                res.retrieve_pricing_all_countries_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RetrievePricingAllCountries401ApplicationJSON])
                res.retrieve_pricing_all_countries_401_application_json_object = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def retrieve_pricing_country(self, request: operations.RetrievePricingCountryRequest) -> operations.RetrievePricingCountryResponse:
        r"""Retrieve outbound pricing for a specific country.
        Retrieves the pricing information based on the specified country.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/get-pricing/outbound/{type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrievePricingCountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pricing_country_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RetrievePricingCountry400ApplicationJSON])
                res.retrieve_pricing_country_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RetrievePricingCountry401ApplicationJSON])
                res.retrieve_pricing_country_401_application_json_object = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    