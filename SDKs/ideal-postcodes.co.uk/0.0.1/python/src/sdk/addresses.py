import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Addresses:
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

    
    def address_search(self, request: operations.AddressSearchRequest) -> operations.AddressSearchResponse:
        r"""addressSearch
        Returns a list of addresses that match the query ordered by relevance score.
        This query accepts an optional limit and page query (defaults to 10 and 0 respectively).
        
        If a valid postcode is passed as the query string, the entire address list
        for that postcode is returned as the result. Note, in these cases, limit
        parameter is ignored and fixed at 100. If your key is configured to return
        Multiple Residence data, you may need to query more pages to return the
        entire list as more than 100 delivery points or residences may be returned.
        
        ### Testing
        
        - **ID1 1QD** Returns a successful query response `2000`
        - **ID1 KFA** Returns an empty query response `2000`
        - **ID1 CLIP** Returns \"no lookups remaining\" error `4020`
        - **ID1 CHOP** Returns \"daily (or individual) lookup limit breached\" error `4021`
        
        Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
        
        ### Notes
        
        This is not an address autocomplete method. Each request that returns an address incurs a lookup charge.
        
        If a valid postcode is passed as the query string, the entire address list for that postcode is passed as a result. Note, in these cases, limit and page parameters are ignored.
        
        ### Pricing
        
        Per lookup charges apply. Queries which find no match are not charged.
        
        ### Data Source
        
        Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/addresses"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AddressSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddressSearchResponseSchema])
                res.address_search_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 503:
            pass

        return res

    
    def updrn_to_address(self, request: operations.UpdrnToAddressRequest) -> operations.UpdrnToAddressResponse:
        r"""updrnToAddress
        ### Returns an address identified via its UDPRN.
        
        You may find it useful to store UDPRN information as it can be used to retrieve the most recent information for an address. It can also be used to test for a \"decommissioned\" address.
        
        ### Testing
        
        To test your implementation of our API we have a range of test UDPRNs that yield both successful and unsuccessful responses to your request. They are the following:
        
        - `0` Returns a successful UDPRN lookup response `2000`
        - `-1` Returns \"UDPRN not found\", error `4044`
        - `-2` Returns \"no lookups remaining\", error `4020`
        - `-3` Returns \"daily (or individual) lookup limit breached\", error `4021`
        
        Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
        
        ### Pricing
        
        Per lookup charges apply. Empty responses are not charged.
        
        ### Data Source
        
        Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/addresses/{udprn}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdrnToAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UdprnToAddressResponseSchema])
                res.udprn_to_address_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 503:
            pass

        return res

    