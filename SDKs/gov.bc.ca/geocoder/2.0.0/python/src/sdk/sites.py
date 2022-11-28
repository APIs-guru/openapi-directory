import requests
from sdk.models import operations
from . import utils

class Sites:
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

    
    def get_addresses_output_format_(self, request: operations.GetAddressesOutputFormatRequest) -> operations.GetAddressesOutputFormatResponse:
        r"""Geocode an address
        Represents the set of geocoded and standardized sites and intersections whose address best matches a given query address.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/addresses.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressesOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_sites_near_output_format_(self, request: operations.GetSitesNearOutputFormatRequest) -> operations.GetSitesNearOutputFormatResponse:
        r"""Find sites near to a geographic point
        Represents sites near a given point in the order of closest to farthest
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sites/near.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitesNearOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_sites_nearest_output_format_(self, request: operations.GetSitesNearestOutputFormatRequest) -> operations.GetSitesNearestOutputFormatResponse:
        r"""Find the site nearest to a geographic point
        Represents the site nearest a given point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sites/nearest.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitesNearestOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_sites_site_id_output_format_(self, request: operations.GetSitesSiteIDOutputFormatRequest) -> operations.GetSitesSiteIDOutputFormatResponse:
        r"""Get a site by its unique ID
        Represents an individual site
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sites/{siteID}.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitesSiteIDOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_sites_site_id_subsites_output_format_(self, request: operations.GetSitesSiteIDSubsitesOutputFormatRequest) -> operations.GetSitesSiteIDSubsitesOutputFormatResponse:
        r"""Represents all subsites of a given site
        Represents all subsites of a given site
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sites/{siteID}/subsites.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitesSiteIDSubsitesOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_sites_within_output_format_(self, request: operations.GetSitesWithinOutputFormatRequest) -> operations.GetSitesWithinOutputFormatResponse:
        r"""Find sites in a geographic area
        Represents sites within a given area
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sites/within.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitesWithinOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    