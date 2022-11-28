import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Forms:
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

    
    def forms_forms_batch_update(self, request: operations.FormsFormsBatchUpdateRequest) -> operations.FormsFormsBatchUpdateResponse:
        r"""Change the form with a batch of updates.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/forms/{formId}:batchUpdate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FormsFormsBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchUpdateFormResponse])
                res.batch_update_form_response = out

        return res

    
    def forms_forms_create(self, request: operations.FormsFormsCreateRequest) -> operations.FormsFormsCreateResponse:
        r"""Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/forms"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FormsFormsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Form])
                res.form = out

        return res

    
    def forms_forms_get(self, request: operations.FormsFormsGetRequest) -> operations.FormsFormsGetResponse:
        r"""Get a form.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/forms/{formId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FormsFormsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Form])
                res.form = out

        return res

    
    def forms_forms_responses_get(self, request: operations.FormsFormsResponsesGetRequest) -> operations.FormsFormsResponsesGetResponse:
        r"""Get one response from the form.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/forms/{formId}/responses/{responseId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FormsFormsResponsesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FormResponse])
                res.form_response = out

        return res

    
    def forms_forms_responses_list(self, request: operations.FormsFormsResponsesListRequest) -> operations.FormsFormsResponsesListResponse:
        r"""List a form's responses.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/forms/{formId}/responses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FormsFormsResponsesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFormResponsesResponse])
                res.list_form_responses_response = out

        return res

    
    def forms_forms_watches_create(self, request: operations.FormsFormsWatchesCreateRequest) -> operations.FormsFormsWatchesCreateResponse:
        r"""Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/forms/{formId}/watches", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FormsFormsWatchesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Watch])
                res.watch = out

        return res

    
    def forms_forms_watches_delete(self, request: operations.FormsFormsWatchesDeleteRequest) -> operations.FormsFormsWatchesDeleteResponse:
        r"""Delete a watch.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/forms/{formId}/watches/{watchId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FormsFormsWatchesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def forms_forms_watches_list(self, request: operations.FormsFormsWatchesListRequest) -> operations.FormsFormsWatchesListResponse:
        r"""Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/forms/{formId}/watches", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FormsFormsWatchesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListWatchesResponse])
                res.list_watches_response = out

        return res

    
    def forms_forms_watches_renew(self, request: operations.FormsFormsWatchesRenewRequest) -> operations.FormsFormsWatchesRenewResponse:
        r"""Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/forms/{formId}/watches/{watchId}:renew", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FormsFormsWatchesRenewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Watch])
                res.watch = out

        return res

    