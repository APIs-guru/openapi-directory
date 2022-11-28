import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Neosentry:
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

    
    def retrieve_sentry_risk_data(self, request: operations.RetrieveSentryRiskDataRequest) -> operations.RetrieveSentryRiskDataResponse:
        r"""Retrieve Sentry (Impact Risk ) Near Earth Objects
        Retrieves Near Earth Objects listed in the NASA sentry data set
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rest/v1/neo/sentry"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveSentryRiskDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SentryObjectPagingDto])
                res.sentry_object_paging_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def retrieve_sentry_risk_data_by_id(self, request: operations.RetrieveSentryRiskDataByIDRequest) -> operations.RetrieveSentryRiskDataByIDResponse:
        r"""Retrieve Sentry (Impact Risk ) Near Earth Objectby ID 
        Retrieves Sentry Near Earth Object by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rest/v1/neo/sentry/{asteroid_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveSentryRiskDataByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SentryImpactRiskObject])
                res.sentry_impact_risk_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    