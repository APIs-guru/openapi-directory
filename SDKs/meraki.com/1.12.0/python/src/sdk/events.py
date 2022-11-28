import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Events:
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

    
    def get_network_appliance_client_security_events(self, request: operations.GetNetworkApplianceClientSecurityEventsRequest) -> operations.GetNetworkApplianceClientSecurityEventsResponse:
        r"""List the security events for a client
        List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/clients/{clientId}/security/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceClientSecurityEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_client_security_events_200_application_json_object = out

        return res

    
    def get_network_appliance_security_events(self, request: operations.GetNetworkApplianceSecurityEventsRequest) -> operations.GetNetworkApplianceSecurityEventsResponse:
        r"""List the security events for a network
        List the security events for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSecurityEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_security_events_200_application_json_object = out

        return res

    
    def get_network_events(self, request: operations.GetNetworkEventsRequest) -> operations.GetNetworkEventsResponse:
        r"""List the events for the network
        List the events for the network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_events_200_application_json_object = out

        return res

    
    def get_network_events_event_types(self, request: operations.GetNetworkEventsEventTypesRequest) -> operations.GetNetworkEventsEventTypesResponse:
        r"""List the event type to human-readable description
        List the event type to human-readable description
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/events/eventTypes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkEventsEventTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_events_event_types_200_application_json_object = out

        return res

    
    def get_organization_appliance_security_events(self, request: operations.GetOrganizationApplianceSecurityEventsRequest) -> operations.GetOrganizationApplianceSecurityEventsResponse:
        r"""List the security events for an organization
        List the security events for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/security/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceSecurityEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_security_events_200_application_json_object = out

        return res

    