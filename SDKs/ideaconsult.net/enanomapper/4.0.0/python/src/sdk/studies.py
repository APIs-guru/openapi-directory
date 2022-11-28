import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Studies:
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

    
    def get_endpoint_summary(self, request: operations.GetEndpointSummaryRequest) -> operations.GetEndpointSummaryResponse:
        r"""Search endpoint summary
        Returns endpoint summary
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enm/{db}/query/study", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEndpointSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Facet])
                res.facet = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_investigation_results(self, request: operations.GetInvestigationResultsRequest) -> operations.GetInvestigationResultsResponse:
        r"""Details of multiple studies
        Multiple studies in tabular form
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enm/{db}/investigation", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInvestigationResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Investigation])
                res.investigation = out
            if utils.match_content_type(content_type, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_substance_study(self, request: operations.GetSubstanceStudyRequest) -> operations.GetSubstanceStudyResponse:
        r"""get substance study
        Returns substance study representation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enm/{db}/substance/{uuid}/study", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubstanceStudyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubstanceStudy])
                res.substance_study = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_substance_study_summary(self, request: operations.GetSubstanceStudySummaryRequest) -> operations.GetSubstanceStudySummaryResponse:
        r"""Get study summary for the substance
        Study summary
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enm/{db}/substance/{uuid}/studySummary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubstanceStudySummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubstanceStudySummary])
                res.substance_study_summary = out
        elif r.status_code == 404:
            pass

        return res

    