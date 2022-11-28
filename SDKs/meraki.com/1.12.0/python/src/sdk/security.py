import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Security:
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

    
    def get_network_appliance_security_intrusion(self, request: operations.GetNetworkApplianceSecurityIntrusionRequest) -> operations.GetNetworkApplianceSecurityIntrusionResponse:
        r"""Returns all supported intrusion settings for an MX network
        Returns all supported intrusion settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/intrusion", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_security_intrusion_200_application_json_object = out

        return res

    
    def get_network_appliance_security_malware(self, request: operations.GetNetworkApplianceSecurityMalwareRequest) -> operations.GetNetworkApplianceSecurityMalwareResponse:
        r"""Returns all supported malware settings for an MX network
        Returns all supported malware settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/malware", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSecurityMalwareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_security_malware_200_application_json_object = out

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

    
    def get_organization_appliance_security_intrusion(self, request: operations.GetOrganizationApplianceSecurityIntrusionRequest) -> operations.GetOrganizationApplianceSecurityIntrusionResponse:
        r"""Returns all supported intrusion settings for an organization
        Returns all supported intrusion settings for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/security/intrusion", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_security_intrusion_200_application_json_object = out

        return res

    
    def update_network_appliance_security_intrusion(self, request: operations.UpdateNetworkApplianceSecurityIntrusionRequest) -> operations.UpdateNetworkApplianceSecurityIntrusionResponse:
        r"""Set the supported intrusion settings for an MX network
        Set the supported intrusion settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/intrusion", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_security_intrusion_200_application_json_object = out

        return res

    
    def update_network_appliance_security_malware(self, request: operations.UpdateNetworkApplianceSecurityMalwareRequest) -> operations.UpdateNetworkApplianceSecurityMalwareResponse:
        r"""Set the supported malware settings for an MX network
        Set the supported malware settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/malware", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceSecurityMalwareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_security_malware_200_application_json_object = out

        return res

    
    def update_organization_appliance_security_intrusion(self, request: operations.UpdateOrganizationApplianceSecurityIntrusionRequest) -> operations.UpdateOrganizationApplianceSecurityIntrusionResponse:
        r"""Sets supported intrusion settings for an organization
        Sets supported intrusion settings for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/security/intrusion", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_appliance_security_intrusion_200_application_json_object = out

        return res

    