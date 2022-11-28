import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Representatives:
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

    
    def civicinfo_representatives_representative_info_by_address(self, request: operations.CivicinfoRepresentativesRepresentativeInfoByAddressRequest) -> operations.CivicinfoRepresentativesRepresentativeInfoByAddressResponse:
        r"""Looks up political geography and representative information for a single address.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/civicinfo/v2/representatives"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CivicinfoRepresentativesRepresentativeInfoByAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepresentativeInfoResponse])
                res.representative_info_response = out

        return res

    
    def civicinfo_representatives_representative_info_by_division(self, request: operations.CivicinfoRepresentativesRepresentativeInfoByDivisionRequest) -> operations.CivicinfoRepresentativesRepresentativeInfoByDivisionResponse:
        r"""Looks up representative information for a single geographic division.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/civicinfo/v2/representatives/{ocdId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CivicinfoRepresentativesRepresentativeInfoByDivisionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepresentativeInfoData])
                res.representative_info_data = out

        return res

    