import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Locations:
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

    
    def mybusinessqanda_locations_questions_answers_delete(self, request: operations.MybusinessqandaLocationsQuestionsAnswersDeleteRequest) -> operations.MybusinessqandaLocationsQuestionsAnswersDeleteResponse:
        r"""Deletes the answer written by the current user to a question.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/answers:delete", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessqandaLocationsQuestionsAnswersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def mybusinessqanda_locations_questions_answers_list(self, request: operations.MybusinessqandaLocationsQuestionsAnswersListRequest) -> operations.MybusinessqandaLocationsQuestionsAnswersListResponse:
        r"""Returns the paginated list of answers for a specified question.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/answers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessqandaLocationsQuestionsAnswersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAnswersResponse])
                res.list_answers_response = out

        return res

    
    def mybusinessqanda_locations_questions_answers_upsert(self, request: operations.MybusinessqandaLocationsQuestionsAnswersUpsertRequest) -> operations.MybusinessqandaLocationsQuestionsAnswersUpsertResponse:
        r"""Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/answers:upsert", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessqandaLocationsQuestionsAnswersUpsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Answer])
                res.answer = out

        return res

    
    def mybusinessqanda_locations_questions_create(self, request: operations.MybusinessqandaLocationsQuestionsCreateRequest) -> operations.MybusinessqandaLocationsQuestionsCreateResponse:
        r"""Adds a question for the specified location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessqandaLocationsQuestionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Question])
                res.question = out

        return res

    
    def mybusinessqanda_locations_questions_delete(self, request: operations.MybusinessqandaLocationsQuestionsDeleteRequest) -> operations.MybusinessqandaLocationsQuestionsDeleteResponse:
        r"""Deletes a specific question written by the current user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessqandaLocationsQuestionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def mybusinessqanda_locations_questions_list(self, request: operations.MybusinessqandaLocationsQuestionsListRequest) -> operations.MybusinessqandaLocationsQuestionsListResponse:
        r"""Returns the paginated list of questions and some of its answers for a specified location. This operation is only valid if the specified location is verified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessqandaLocationsQuestionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListQuestionsResponse])
                res.list_questions_response = out

        return res

    
    def mybusinessqanda_locations_questions_patch(self, request: operations.MybusinessqandaLocationsQuestionsPatchRequest) -> operations.MybusinessqandaLocationsQuestionsPatchResponse:
        r"""Updates a specific question written by the current user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessqandaLocationsQuestionsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Question])
                res.question = out

        return res

    