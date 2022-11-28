import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Structures:
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

    
    def search_by_identifier(self, request: operations.SearchByIdentifierRequest) -> operations.SearchByIdentifierResponse:
        r"""Exact chemical structure search
        Returns compounds found
        http://ambit.sf.net - Learn more about operations provided by this API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enm/{db}/query/compound/{term}/{representation}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchByIdentifierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dataset])
                res.dataset = out
        elif r.status_code == 404:
            pass

        return res

    
    def search_by_similarity(self, request: operations.SearchBySimilarityRequest) -> operations.SearchBySimilarityResponse:
        r"""Exact similarity search
        Returns similar compounds
        http://ambit.sf.net - Learn more about operations provided by this API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enm/{db}/query/similarity", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBySimilarityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dataset])
                res.dataset = out
        elif r.status_code == 404:
            pass

        return res

    
    def search_by_smarts(self, request: operations.SearchBySmartsRequest) -> operations.SearchBySmartsResponse:
        r"""Substructure search
        Returns compounds with the specified substructure
        http://ambit.sf.net - Learn more about operations provided by this API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enm/{db}/query/smarts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBySmartsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dataset])
                res.dataset = out
        elif r.status_code == 404:
            pass

        return res

    