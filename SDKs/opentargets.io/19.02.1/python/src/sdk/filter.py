import requests
from sdk.models import operations
from . import utils

class Filter:
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

    
    def get_association_filter(self, request: operations.GetAssociationFilterRequest) -> operations.GetAssociationFilterResponse:
        r"""Filter available associations
        More complex queries for associations scores and objects can be done using
        this method, which allows to sort in different order, restrict to a specific class
        of diseases or targets, as well as filtering results by score and associated pathways.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/public/association/filter"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_evidence_filter(self, request: operations.GetEvidenceFilterRequest) -> operations.GetEvidenceFilterResponse:
        r"""Filter available evidence
        The filter method allows to retrieve the specific data that supports a connection between targets and diseases.
        Filters can be used to restrict the results by source and type of data,
        or limit results to targets which are part of a particular pathway.
        Minimum and maximum scores can be specified as well as the type of evidence linking target and disease.
        **Note** that multiple genes and diseases can be specified in the same request.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/public/evidence/filter"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEvidenceFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_association_filter(self, request: operations.PostAssociationFilterRequest) -> operations.PostAssociationFilterResponse:
        r"""Batch query available associations
        Complex queries and filters for association objects can also be submitted using a JSON
        object and the equivalent POST method.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/public/association/filter"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssociationFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_evidence_filter(self, request: operations.PostEvidenceFilterRequest) -> operations.PostEvidenceFilterResponse:
        r"""Batch filter available evidence
        POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).
        Filters can be specified as part of a `json` object in the body, simplifying the submission of queries.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/public/evidence/filter"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEvidenceFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    