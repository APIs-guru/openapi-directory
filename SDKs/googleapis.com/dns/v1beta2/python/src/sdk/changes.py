import requests
from typing import Optional
from enum import Enum
from sdk.models import shared, operations
from . import utils

class Changes:
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

    
    def dns_changes_create(self, request: operations.DNSChangesCreateRequest) -> operations.DNSChangesCreateResponse:
        r"""Atomically updates the ResourceRecordSet collection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v1beta2/projects/{project}/managedZones/{managedZone}/changes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSChangesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Change])
                res.change = out

        return res

    
    def dns_changes_get(self, request: operations.DNSChangesGetRequest) -> operations.DNSChangesGetResponse:
        r"""Fetches the representation of an existing Change.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v1beta2/projects/{project}/managedZones/{managedZone}/changes/{changeId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSChangesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Change])
                res.change = out

        return res

    
    def dns_changes_list(self, request: operations.DNSChangesListRequest) -> operations.DNSChangesListResponse:
        r"""Enumerates Changes to a ResourceRecordSet collection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v1beta2/projects/{project}/managedZones/{managedZone}/changes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSChangesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChangesListResponse])
                res.changes_list_response = out

        return res

    