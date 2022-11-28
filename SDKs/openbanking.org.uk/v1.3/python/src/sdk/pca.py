import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Pca:
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

    
    def get_personal_current_accounts(self, request: operations.GetPersonalCurrentAccountsRequest) -> operations.GetPersonalCurrentAccountsResponse:
        r"""Gets a list of all `Personal Current Account` objects.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/personal-current-accounts"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPersonalCurrentAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSON])
                res.get_personal_current_accounts_200_application_prs_openbanking_opendata_v1_3_plus_json_object = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalCurrentAccounts400ErrorObject])
                res.four_hundred_error_object = out
        elif r.status_code == 408:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalCurrentAccounts408ErrorObject])
                res.four_hundred_and_eight_error_object = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalCurrentAccounts429ErrorObject])
                res.four_hundred_and_twenty_nine_error_object = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalCurrentAccounts500ErrorObject])
                res.five_hundred_error_object = out
        elif r.status_code == 503:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalCurrentAccounts503ErrorObject])
                res.five_hundred_and_three_error_object = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalCurrentAccountsErrorObject])
                res.error_object = out

        return res

    
    def head_personal_current_accounts(self, request: operations.HeadPersonalCurrentAccountsRequest) -> operations.HeadPersonalCurrentAccountsResponse:
        r"""Gets header information on the current set of `Personal Current Account` data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/personal-current-accounts"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("HEAD", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadPersonalCurrentAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/prs.openbanking.opendata.v1.3+json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.no_response = out

        return res

    