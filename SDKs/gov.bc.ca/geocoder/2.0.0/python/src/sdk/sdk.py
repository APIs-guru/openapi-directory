import warnings
import requests
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://geocoder.api.gov.bc.ca/",
	"https://geocodertst.api.gov.bc.ca/",
	"https://geocoderdlv.api.gov.bc.ca/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)

    
    def get_addresses_output_format_(self, request: operations.GetAddressesOutputFormatRequest) -> operations.GetAddressesOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/addresses.{outputFormat}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressesOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_intersections_intersection_id_output_format_(self, request: operations.GetIntersectionsIntersectionIDOutputFormatRequest) -> operations.GetIntersectionsIntersectionIDOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/intersections/{intersectionID}.{outputFormat}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntersectionsIntersectionIDOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_intersections_near_output_format_(self, request: operations.GetIntersectionsNearOutputFormatRequest) -> operations.GetIntersectionsNearOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/intersections/near.{outputFormat}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntersectionsNearOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_intersections_nearest_output_format_(self, request: operations.GetIntersectionsNearestOutputFormatRequest) -> operations.GetIntersectionsNearestOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/intersections/nearest.{outputFormat}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntersectionsNearestOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_intersections_within_output_format_(self, request: operations.GetIntersectionsWithinOutputFormatRequest) -> operations.GetIntersectionsWithinOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/intersections/within.{outputFormat}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntersectionsWithinOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_occupants_addresses_output_format_(self, request: operations.GetOccupantsAddressesOutputFormatRequest) -> operations.GetOccupantsAddressesOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/occupants/addresses.{outputFormat}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOccupantsAddressesOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_occupants_near_output_format_(self, request: operations.GetOccupantsNearOutputFormatRequest) -> operations.GetOccupantsNearOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/occupants/near.{outputFormat}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOccupantsNearOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_occupants_nearest_output_format_(self, request: operations.GetOccupantsNearestOutputFormatRequest) -> operations.GetOccupantsNearestOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/occupants/nearest.{outputFormat}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOccupantsNearestOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_occupants_occupant_id_output_format_(self, request: operations.GetOccupantsOccupantIDOutputFormatRequest) -> operations.GetOccupantsOccupantIDOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/occupants/{occupantID}.{outputFormat}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOccupantsOccupantIDOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_occupants_within_output_format_(self, request: operations.GetOccupantsWithinOutputFormatRequest) -> operations.GetOccupantsWithinOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/occupants/within.{outputFormat}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOccupantsWithinOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_parcels_pids_site_id_output_format_(self, request: operations.GetParcelsPidsSiteIDOutputFormatRequest) -> operations.GetParcelsPidsSiteIDOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/parcels/pids/{siteID}.{outputFormat}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetParcelsPidsSiteIDOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_sites_near_output_format_(self, request: operations.GetSitesNearOutputFormatRequest) -> operations.GetSitesNearOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sites/near.{outputFormat}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitesNearOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_sites_nearest_output_format_(self, request: operations.GetSitesNearestOutputFormatRequest) -> operations.GetSitesNearestOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sites/nearest.{outputFormat}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitesNearestOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_sites_site_id_output_format_(self, request: operations.GetSitesSiteIDOutputFormatRequest) -> operations.GetSitesSiteIDOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sites/{siteID}.{outputFormat}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitesSiteIDOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_sites_site_id_subsites_output_format_(self, request: operations.GetSitesSiteIDSubsitesOutputFormatRequest) -> operations.GetSitesSiteIDSubsitesOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sites/{siteID}/subsites.{outputFormat}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitesSiteIDSubsitesOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_sites_within_output_format_(self, request: operations.GetSitesWithinOutputFormatRequest) -> operations.GetSitesWithinOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/sites/within.{outputFormat}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitesWithinOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    