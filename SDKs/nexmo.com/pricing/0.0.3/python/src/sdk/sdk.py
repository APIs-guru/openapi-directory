import warnings
import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://rest.nexmo.com/account",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def retrieve_prefix_pricing(self, request: operations.RetrievePrefixPricingRequest) -> operations.RetrievePrefixPricingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/get-prefix-pricing/outbound/{type}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/get-full-pricing/outbound/{type}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/get-pricing/outbound/{type}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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

    