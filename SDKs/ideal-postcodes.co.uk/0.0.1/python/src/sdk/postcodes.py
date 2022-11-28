import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Postcodes:
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

    
    def postcode_to_addresses(self, request: operations.PostcodeToAddressesRequest) -> operations.PostcodeToAddressesResponse:
        r"""postcodeToAddresses
        Returns the complete list of addresses for a postcode.
        
        Postcode searches are space and case insensitive.
        
        ### Postcode not found
        
        Please note: For postcodes that do not exist, your key is not charged, the API returns a 404 response with a response body
        
        ```
        {
          \"code\": 4040,
          \"message\": \"Postcode not found\"
        }
        ```
        
        ### Testing
        
        To test your implementation of our API we have a range of test postcodes that yield both successful and unsuccessful responses to your request. They are the following:
        
        - `ID1 1QD` Returns a successful postcode lookup response `2000`
        - `ID1 KFA` Returns \"postcode not found\", error `4040`
        - `ID1 CLIP` Returns \"no lookups remaining\", error `4020`
        - `ID1 CHOP` Returns \"daily (or individual) lookup limit breached\", error `4021`
        
        Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
        
        ### Multiple Residence Dataset & Pagination
        
        For keys which use the Multiple Residence dataset, there are a small number of postcodes which yield more than Royal Mail's maximum allowed return (of 100 addresses) per request. Multiple Residence data users have the option of paginating postcode queries if the limit is reached.
        
        #### Multiple Residence: Additional Query Parameters
        
        | Property | Description                                                                          |
        | -------- | ------------------------------------------------------------------------------------ |
        | `page`   | 0 indexed indicator of the page of results to receive. Defaults to `0`               |
        
        #### Multiple Residence: Additional Response Fields
        
        | Property | Description                                                                               |
        | -------- | ----------------------------------------------------------------------------------------- |
        | `page`   | `number` Indicates current page number                                                    |
        | `total`  | `number` Indicates the maximum number of delivery points plus residences at this postcode |
        | `limit`  | `number` Maximum number of results per request. Fixed at 100 for this method              |
        
        ### Pricing
        
        Per lookup charges are applied. Empty responses are not charged.
        
        ### Data Source
        
        Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/postcodes/{postcode}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostcodeToAddressesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostcodeToAddressResponseSchema])
                res.postcode_to_address_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddressLookupResponseSchema])
                res.address_lookup_response_schema = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddressLookupResponseSchema])
                res.address_lookup_response_schema = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddressLookupResponseSchema])
                res.address_lookup_response_schema = out
        elif r.status_code == 503:
            pass

        return res

    