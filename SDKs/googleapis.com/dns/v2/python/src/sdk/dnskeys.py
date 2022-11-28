import requests
from typing import Optional
from enum import Enum
from sdk.models import shared, operations
from . import utils

class DNSKeys:
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

    
    def dns_dns_keys_get(self, request: operations.DNSDNSKeysGetRequest) -> operations.DNSDNSKeysGetResponse:
        r"""Fetches the representation of an existing DnsKey.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/dnsKeys/{dnsKeyId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSDNSKeysGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DNSKey])
                res.dns_key = out

        return res

    
    def dns_dns_keys_list(self, request: operations.DNSDNSKeysListRequest) -> operations.DNSDNSKeysListResponse:
        r"""Enumerates DnsKeys to a ResourceRecordSet collection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/managedZones/{managedZone}/dnsKeys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSDNSKeysListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DNSKeysListResponse])
                res.dns_keys_list_response = out

        return res

    