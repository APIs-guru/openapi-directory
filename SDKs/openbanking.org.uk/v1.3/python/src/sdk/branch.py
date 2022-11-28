import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Branch:
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

    
    def get_branches(self, request: operations.GetBranchesRequest) -> operations.GetBranchesResponse:
        r"""Gets a list of all `Branch` objects.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/branches"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBranchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSON])
                res.get_branches_200_application_prs_openbanking_opendata_v1_3_plus_json_object = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBranches400ErrorObject])
                res.four_hundred_error_object = out
        elif r.status_code == 408:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBranches408ErrorObject])
                res.four_hundred_and_eight_error_object = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBranches429ErrorObject])
                res.four_hundred_and_twenty_nine_error_object = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBranches500ErrorObject])
                res.five_hundred_error_object = out
        elif r.status_code == 503:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBranches503ErrorObject])
                res.five_hundred_and_three_error_object = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBranchesErrorObject])
                res.error_object = out

        return res

    
    def head_branches(self, request: operations.HeadBranchesRequest) -> operations.HeadBranchesResponse:
        r"""Gets header information on the current set of `Branch` data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/branches"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("HEAD", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadBranchesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.no_response = out

        return res

    