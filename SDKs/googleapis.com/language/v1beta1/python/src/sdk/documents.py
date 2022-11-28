import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Documents:
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

    
    def language_documents_analyze_entities(self, request: operations.LanguageDocumentsAnalyzeEntitiesRequest) -> operations.LanguageDocumentsAnalyzeEntitiesResponse:
        r"""Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1/documents:analyzeEntities"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LanguageDocumentsAnalyzeEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AnalyzeEntitiesResponse])
                res.analyze_entities_response = out

        return res

    
    def language_documents_analyze_sentiment(self, request: operations.LanguageDocumentsAnalyzeSentimentRequest) -> operations.LanguageDocumentsAnalyzeSentimentResponse:
        r"""Analyzes the sentiment of the provided text.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1/documents:analyzeSentiment"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LanguageDocumentsAnalyzeSentimentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AnalyzeSentimentResponse])
                res.analyze_sentiment_response = out

        return res

    
    def language_documents_analyze_syntax(self, request: operations.LanguageDocumentsAnalyzeSyntaxRequest) -> operations.LanguageDocumentsAnalyzeSyntaxResponse:
        r"""Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1/documents:analyzeSyntax"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LanguageDocumentsAnalyzeSyntaxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AnalyzeSyntaxResponse])
                res.analyze_syntax_response = out

        return res

    
    def language_documents_annotate_text(self, request: operations.LanguageDocumentsAnnotateTextRequest) -> operations.LanguageDocumentsAnnotateTextResponse:
        r"""A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1/documents:annotateText"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LanguageDocumentsAnnotateTextResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AnnotateTextResponse])
                res.annotate_text_response = out

        return res

    