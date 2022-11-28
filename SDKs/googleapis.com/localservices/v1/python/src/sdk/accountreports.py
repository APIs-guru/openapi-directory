import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class AccountReports:
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

    
    def localservices_account_reports_search(self, request: operations.LocalservicesAccountReportsSearchRequest) -> operations.LocalservicesAccountReportsSearchResponse:
        r"""Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/accountReports:search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LocalservicesAccountReportsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse])
                res.google_ads_homeservices_localservices_v1_search_account_reports_response = out

        return res

    