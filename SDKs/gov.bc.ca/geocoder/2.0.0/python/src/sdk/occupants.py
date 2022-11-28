import requests
from sdk.models import operations
from . import utils

class Occupants:
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

    
    def get_occupants_addresses_output_format_(self, request: operations.GetOccupantsAddressesOutputFormatRequest) -> operations.GetOccupantsAddressesOutputFormatResponse:
        r"""Geocode an address and identify site occupants
        Represents the set of occupants whose addresses best match a given query address. Every occupant has an associated site which has a standardized address and a coordinate location on the Earth.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/occupants/addresses.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOccupantsAddressesOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_occupants_near_output_format_(self, request: operations.GetOccupantsNearOutputFormatRequest) -> operations.GetOccupantsNearOutputFormatResponse:
        r"""Find occupants of sites near to a geographic point
        Represents occupants near a given point in order of closest to farthest
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/occupants/near.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOccupantsNearOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_occupants_nearest_output_format_(self, request: operations.GetOccupantsNearestOutputFormatRequest) -> operations.GetOccupantsNearestOutputFormatResponse:
        r"""Find occupants of the site nearest to a geographic point
        Represents the closest occupant to a given point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/occupants/nearest.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOccupantsNearestOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_occupants_occupant_id_output_format_(self, request: operations.GetOccupantsOccupantIDOutputFormatRequest) -> operations.GetOccupantsOccupantIDOutputFormatResponse:
        r"""Get an occupant (of a site) by its unique ID
        Represents an individual occupant
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/occupants/{occupantID}.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOccupantsOccupantIDOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_occupants_within_output_format_(self, request: operations.GetOccupantsWithinOutputFormatRequest) -> operations.GetOccupantsWithinOutputFormatResponse:
        r"""Find occupants of sites in a geographic area
        Represents all occupants within a given area
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/occupants/within.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOccupantsWithinOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    