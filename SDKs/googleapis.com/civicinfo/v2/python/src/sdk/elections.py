import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Elections:
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

    
    def civicinfo_elections_election_query(self, request: operations.CivicinfoElectionsElectionQueryRequest) -> operations.CivicinfoElectionsElectionQueryResponse:
        r"""List of available elections to query.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/civicinfo/v2/elections"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CivicinfoElectionsElectionQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionsQueryResponse])
                res.elections_query_response = out

        return res

    
    def civicinfo_elections_voter_info_query(self, request: operations.CivicinfoElectionsVoterInfoQueryRequest) -> operations.CivicinfoElectionsVoterInfoQueryResponse:
        r"""Looks up information relevant to a voter based on the voter's registered address.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/civicinfo/v2/voterinfo"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CivicinfoElectionsVoterInfoQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoterInfoResponse])
                res.voter_info_response = out

        return res

    