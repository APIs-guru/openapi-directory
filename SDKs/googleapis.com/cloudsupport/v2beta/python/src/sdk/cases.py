import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Cases:
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

    
    def cloudsupport_cases_attachments_list(self, request: operations.CloudsupportCasesAttachmentsListRequest) -> operations.CloudsupportCasesAttachmentsListResponse:
        r"""Retrieve all attachments associated with a support case.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{parent}/attachments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsupportCasesAttachmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAttachmentsResponse])
                res.list_attachments_response = out

        return res

    
    def cloudsupport_cases_close(self, request: operations.CloudsupportCasesCloseRequest) -> operations.CloudsupportCasesCloseResponse:
        r"""Close the specified case.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{name}:close", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsupportCasesCloseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Case])
                res.case = out

        return res

    
    def cloudsupport_cases_comments_create(self, request: operations.CloudsupportCasesCommentsCreateRequest) -> operations.CloudsupportCasesCommentsCreateResponse:
        r"""Add a new comment to the specified Case. The comment object must have the following fields set: body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{parent}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsupportCasesCommentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Comment])
                res.comment = out

        return res

    
    def cloudsupport_cases_comments_list(self, request: operations.CloudsupportCasesCommentsListRequest) -> operations.CloudsupportCasesCommentsListResponse:
        r"""Retrieve all Comments associated with the Case object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{parent}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsupportCasesCommentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCommentsResponse])
                res.list_comments_response = out

        return res

    
    def cloudsupport_cases_create(self, request: operations.CloudsupportCasesCreateRequest) -> operations.CloudsupportCasesCreateResponse:
        r"""Create a new case and associate it with the given Cloud resource. The case object must have the following fields set: display_name, description, classification, and severity.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{parent}/cases", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsupportCasesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Case])
                res.case = out

        return res

    
    def cloudsupport_cases_escalate(self, request: operations.CloudsupportCasesEscalateRequest) -> operations.CloudsupportCasesEscalateResponse:
        r"""Escalate a case. Escalating a case will initiate the Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{name}:escalate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsupportCasesEscalateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Case])
                res.case = out

        return res

    
    def cloudsupport_cases_get(self, request: operations.CloudsupportCasesGetRequest) -> operations.CloudsupportCasesGetResponse:
        r"""Retrieve the specified case.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsupportCasesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Case])
                res.case = out

        return res

    
    def cloudsupport_cases_list(self, request: operations.CloudsupportCasesListRequest) -> operations.CloudsupportCasesListResponse:
        r"""Retrieve all cases under the specified parent. Note: Listing cases under an Organization returns only the cases directly parented by that organization. To retrieve all cases under an organization, including cases parented by projects under that organization, use `cases.search`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{parent}/cases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsupportCasesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCasesResponse])
                res.list_cases_response = out

        return res

    
    def cloudsupport_cases_patch(self, request: operations.CloudsupportCasesPatchRequest) -> operations.CloudsupportCasesPatchResponse:
        r"""Update the specified case. Only a subset of fields (display_name, description, time_zone, subscriber_email_addresses, related_resources, severity, priority, primary_contact, and labels) can be updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsupportCasesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Case])
                res.case = out

        return res

    
    def cloudsupport_cases_search(self, request: operations.CloudsupportCasesSearchRequest) -> operations.CloudsupportCasesSearchResponse:
        r"""Search cases using the specified query.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2beta/cases:search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsupportCasesSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchCasesResponse])
                res.search_cases_response = out

        return res

    