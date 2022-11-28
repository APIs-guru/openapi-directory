import requests
from sdk.models import operations
from . import utils

class Retrieve:
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

    
    def get_association_by_id(self, request: operations.GetAssociationByIDRequest) -> operations.GetAssociationByIDResponse:
        r"""Get association by id
        Once we integrate all evidence connecting a target to a specific disease, we
         compute an association score by the means of an harmonic sum. This *association score* provides
         an indication of how strong the evidence behind each connection is and can be
         used to rank genes in order of likelihood as drug targets.
         The association ID is constructed by using the Ensembl ID of the gene and the
         EFO ID for the disease (e.g. ENSG00000073756-EFO_0003767).
         The method returns an association object, which contains the data and summary
         on each evidence type included in the calculation of the score, as well as the score itself.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/public/association"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_evidence_by_id(self, request: operations.GetEvidenceByIDRequest) -> operations.GetEvidenceByIDResponse:
        r"""Get evidence by ID
        We call **evidence** a unit of data that support a connection between a target and a disease.
        The Open Targets Platform integrates multiple types of evidence including genetic associations,
        somatic mutations, RNA expression and target-disease associations mined from the literature.
        This method allows you to retrieve a single evidence item or a list of pieces of evidence by using their
        targetvalidation.org ID.
        
        Evidence IDs are unique within each data release (e.g. `8ed3d7568a8c6cac9c95cfb869bac762` for release 1.2).
        You can obtain a list of evidence and their IDs from other API calls such as [/public/evidence/filter](#!/public/get_public_evidence_filter).
        
        **Please note** that a specific evidence ID may change between data releases. We can not guarantee that a specific evidence ID will refer to the same piece of evidence connecting a target and its diseases.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/public/evidence"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEvidenceByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_evidence_by_id(self, request: operations.PostEvidenceByIDRequest) -> operations.PostEvidenceByIDResponse:
        r"""Get evidence for a list of IDs
        This is the POST version of [/public/evidence](#!/public/get_public_evidence).
        It allows to query for a list of evidence strings encoded in a `json` object to be passed in the body.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/public/evidence"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEvidenceByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    