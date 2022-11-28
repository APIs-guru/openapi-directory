import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def essentialcontacts_projects_contacts_compute(self, request: operations.EssentialcontactsProjectsContactsComputeRequest) -> operations.EssentialcontactsProjectsContactsComputeResponse:
        r"""Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/contacts:compute", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EssentialcontactsProjectsContactsComputeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudEssentialcontactsV1ComputeContactsResponse])
                res.google_cloud_essentialcontacts_v1_compute_contacts_response = out

        return res

    
    def essentialcontacts_projects_contacts_create(self, request: operations.EssentialcontactsProjectsContactsCreateRequest) -> operations.EssentialcontactsProjectsContactsCreateResponse:
        r"""Adds a new contact for a resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/contacts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EssentialcontactsProjectsContactsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudEssentialcontactsV1Contact])
                res.google_cloud_essentialcontacts_v1_contact = out

        return res

    
    def essentialcontacts_projects_contacts_delete(self, request: operations.EssentialcontactsProjectsContactsDeleteRequest) -> operations.EssentialcontactsProjectsContactsDeleteResponse:
        r"""Deletes a contact.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EssentialcontactsProjectsContactsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def essentialcontacts_projects_contacts_get(self, request: operations.EssentialcontactsProjectsContactsGetRequest) -> operations.EssentialcontactsProjectsContactsGetResponse:
        r"""Gets a single contact.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EssentialcontactsProjectsContactsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudEssentialcontactsV1Contact])
                res.google_cloud_essentialcontacts_v1_contact = out

        return res

    
    def essentialcontacts_projects_contacts_list(self, request: operations.EssentialcontactsProjectsContactsListRequest) -> operations.EssentialcontactsProjectsContactsListResponse:
        r"""Lists the contacts that have been set on a resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/contacts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EssentialcontactsProjectsContactsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudEssentialcontactsV1ListContactsResponse])
                res.google_cloud_essentialcontacts_v1_list_contacts_response = out

        return res

    
    def essentialcontacts_projects_contacts_patch(self, request: operations.EssentialcontactsProjectsContactsPatchRequest) -> operations.EssentialcontactsProjectsContactsPatchResponse:
        r"""Updates a contact. Note: A contact's email address cannot be changed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EssentialcontactsProjectsContactsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudEssentialcontactsV1Contact])
                res.google_cloud_essentialcontacts_v1_contact = out

        return res

    
    def essentialcontacts_projects_contacts_send_test_message(self, request: operations.EssentialcontactsProjectsContactsSendTestMessageRequest) -> operations.EssentialcontactsProjectsContactsSendTestMessageResponse:
        r"""Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}/contacts:sendTestMessage", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EssentialcontactsProjectsContactsSendTestMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    