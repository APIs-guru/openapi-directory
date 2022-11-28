import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Udprn:
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

    
    def lookup_udprn(self, request: operations.LookupUdprnRequest) -> operations.LookupUdprnResponse:
        r"""lookupUDPRN
        Returns an address identified via its Unique Delivery Point Reference 
        Number (UDPRN).
        
        You may find it useful to store UDPRN information as it can be used to 
        retrieve the most recent information for an address. It can also be used 
        to test for a \"decommissioned\" address.
        
        UDPRNs are an eight digit unique numeric code (e.g. 25962203) for any 
        premise on the Postcode Address File. It's essentially a unique identifier 
        for every address in the UK that Royal Mail has in its database.
        
        ### Testing
        
        To test your implementation of our API we have a range of test UDPRNs 
        that yield both successful and unsuccessful responses to your request. 
        They are the following
        
        - <code>0</code> Returns a successful UDPRN lookup response <code>2000</code>
        - <code>-1</code> Returns \"UDPRN not found\", error <code>4044</code>
        - <code>-2</code> Returns \"no lookups remaining\", error <code>4020</code>
        - <code>-3</code> Returns \"daily (or individual) lookup limit breached\", error <code>4021</code>
        
        Test requests will undergo usual authentication and restriction rules (
        individual and daily lookup limits) to surface any problems you may have 
        during implementation. However, it will not count towards a postcode 
        lookup on your key.
        
        ### Pricing
        
        Per lookup charges apply. Empty responses are not charged.
        
        ### Data Source
        
        Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/udprn/{udprn}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LookupUdprnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddressLookupResponseSchema])
                res.address_lookup_response_schema = out
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

    