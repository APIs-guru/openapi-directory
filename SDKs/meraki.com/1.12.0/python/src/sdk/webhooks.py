import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Webhooks:
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

    
    def create_network_webhooks_http_server(self, request: operations.CreateNetworkWebhooksHTTPServerRequest) -> operations.CreateNetworkWebhooksHTTPServerResponse:
        r"""Add an HTTP server to a network
        Add an HTTP server to a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/httpServers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkWebhooksHTTPServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_webhooks_http_server_201_application_json_object = out

        return res

    
    def create_network_webhooks_webhook_test(self, request: operations.CreateNetworkWebhooksWebhookTestRequest) -> operations.CreateNetworkWebhooksWebhookTestResponse:
        r"""Send a test webhook for a network
        Send a test webhook for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/webhookTests", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkWebhooksWebhookTestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_webhooks_webhook_test_201_application_json_object = out

        return res

    
    def delete_network_webhooks_http_server(self, request: operations.DeleteNetworkWebhooksHTTPServerRequest) -> operations.DeleteNetworkWebhooksHTTPServerResponse:
        r"""Delete an HTTP server from a network
        Delete an HTTP server from a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/httpServers/{httpServerId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkWebhooksHTTPServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_network_webhooks_http_server(self, request: operations.GetNetworkWebhooksHTTPServerRequest) -> operations.GetNetworkWebhooksHTTPServerResponse:
        r"""Return an HTTP server for a network
        Return an HTTP server for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/httpServers/{httpServerId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWebhooksHTTPServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_webhooks_http_server_200_application_json_object = out

        return res

    
    def get_network_webhooks_http_servers(self, request: operations.GetNetworkWebhooksHTTPServersRequest) -> operations.GetNetworkWebhooksHTTPServersResponse:
        r"""List the HTTP servers for a network
        List the HTTP servers for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/httpServers", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWebhooksHTTPServersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_webhooks_http_servers_200_application_json_object = out

        return res

    
    def get_network_webhooks_webhook_test(self, request: operations.GetNetworkWebhooksWebhookTestRequest) -> operations.GetNetworkWebhooksWebhookTestResponse:
        r"""Return the status of a webhook test for a network
        Return the status of a webhook test for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/webhookTests/{webhookTestId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWebhooksWebhookTestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_webhooks_webhook_test_200_application_json_object = out

        return res

    
    def get_organization_webhooks_alert_types(self, request: operations.GetOrganizationWebhooksAlertTypesRequest) -> operations.GetOrganizationWebhooksAlertTypesResponse:
        r"""Return a list of alert types to be used with managing webhook alerts
        Return a list of alert types to be used with managing webhook alerts
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/webhooks/alertTypes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationWebhooksAlertTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_webhooks_alert_types_200_application_json_object = out

        return res

    
    def get_organization_webhooks_logs(self, request: operations.GetOrganizationWebhooksLogsRequest) -> operations.GetOrganizationWebhooksLogsResponse:
        r"""Return the log of webhook POSTs sent
        Return the log of webhook POSTs sent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/webhooks/logs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationWebhooksLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_webhooks_logs_200_application_json_object = out

        return res

    
    def update_network_webhooks_http_server(self, request: operations.UpdateNetworkWebhooksHTTPServerRequest) -> operations.UpdateNetworkWebhooksHTTPServerResponse:
        r"""Update an HTTP server
        Update an HTTP server
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/webhooks/httpServers/{httpServerId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWebhooksHTTPServerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_webhooks_http_server_200_application_json_object = out

        return res

    