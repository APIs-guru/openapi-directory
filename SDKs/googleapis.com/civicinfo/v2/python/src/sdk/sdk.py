import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://civicinfo.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def civicinfo_divisions_search(self, request: operations.CivicinfoDivisionsSearchRequest) -> operations.CivicinfoDivisionsSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/civicinfo/v2/divisions"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CivicinfoDivisionsSearchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DivisionSearchResponse])
                res.division_search_response = out

        return res

    
    
    def civicinfo_elections_election_query(self, request: operations.CivicinfoElectionsElectionQueryRequest) -> operations.CivicinfoElectionsElectionQueryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/civicinfo/v2/elections"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CivicinfoElectionsElectionQueryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionsQueryResponse])
                res.elections_query_response = out

        return res

    
    
    def civicinfo_elections_voter_info_query(self, request: operations.CivicinfoElectionsVoterInfoQueryRequest) -> operations.CivicinfoElectionsVoterInfoQueryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/civicinfo/v2/voterinfo"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CivicinfoElectionsVoterInfoQueryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoterInfoResponse])
                res.voter_info_response = out

        return res

    
    
    def civicinfo_representatives_representative_info_by_address(self, request: operations.CivicinfoRepresentativesRepresentativeInfoByAddressRequest) -> operations.CivicinfoRepresentativesRepresentativeInfoByAddressResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/civicinfo/v2/representatives"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CivicinfoRepresentativesRepresentativeInfoByAddressResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepresentativeInfoResponse])
                res.representative_info_response = out

        return res

    
    
    def civicinfo_representatives_representative_info_by_division(self, request: operations.CivicinfoRepresentativesRepresentativeInfoByDivisionRequest) -> operations.CivicinfoRepresentativesRepresentativeInfoByDivisionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/civicinfo/v2/representatives/{ocdId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CivicinfoRepresentativesRepresentativeInfoByDivisionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepresentativeInfoData])
                res.representative_info_data = out

        return res

    