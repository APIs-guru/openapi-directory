import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Substances:
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

    
    def get_substance_by_uuid(self, request: operations.GetSubstanceByUUIDRequest) -> operations.GetSubstanceByUUIDResponse:
        r"""Get a substance
        Returns substance representation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enm/{db}/substance/{uuid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubstanceByUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Substance])
                res.substance = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_substance_composition(self, request: operations.GetSubstanceCompositionRequest) -> operations.GetSubstanceCompositionResponse:
        r"""Substance composition
        Returns substance composition
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enm/{db}/substance/{uuid}/composition", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubstanceCompositionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubstanceComposition])
                res.substance_composition = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_substance_structures(self, request: operations.GetSubstanceStructuresRequest) -> operations.GetSubstanceStructuresResponse:
        r"""Get substance composition as a dataset
        Returns substance composition
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enm/{db}/substance/{uuid}/structures", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubstanceStructuresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dataset])
                res.dataset = out
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

    
    def get_substances(self, request: operations.GetSubstancesRequest) -> operations.GetSubstancesResponse:
        r"""List substances
        Returns a list of substances, according to the search criteria
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enm/{db}/substance", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Substance])
                res.substance = out
        elif r.status_code == 404:
            pass

        return res

    