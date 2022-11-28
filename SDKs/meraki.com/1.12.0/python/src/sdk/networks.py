import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Networks:
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

    
    def bind_network(self, request: operations.BindNetworkRequest) -> operations.BindNetworkResponse:
        r"""Bind a network to a template.
        Bind a network to a template.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/bind", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BindNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bind_network_200_application_json_object = out

        return res

    
    def claim_network_devices(self, request: operations.ClaimNetworkDevicesRequest) -> operations.ClaimNetworkDevicesResponse:
        r"""Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
        Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/devices/claim", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClaimNetworkDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def combine_organization_networks(self, request: operations.CombineOrganizationNetworksRequest) -> operations.CombineOrganizationNetworksResponse:
        r"""Combine multiple networks into a single network
        Combine multiple networks into a single network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/networks/combine", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CombineOrganizationNetworksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.combine_organization_networks_200_application_json_object = out

        return res

    
    def create_network_firmware_upgrades_rollback(self, request: operations.CreateNetworkFirmwareUpgradesRollbackRequest) -> operations.CreateNetworkFirmwareUpgradesRollbackResponse:
        r"""Rollback a Firmware Upgrade For A Network
        Rollback a Firmware Upgrade For A Network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/firmwareUpgrades/rollbacks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkFirmwareUpgradesRollbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_firmware_upgrades_rollback_200_application_json_object = out

        return res

    
    def create_network_floor_plan(self, request: operations.CreateNetworkFloorPlanRequest) -> operations.CreateNetworkFloorPlanResponse:
        r"""Upload a floor plan
        Upload a floor plan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/floorPlans", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkFloorPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_floor_plan_201_application_json_object = out

        return res

    
    def create_network_group_policy(self, request: operations.CreateNetworkGroupPolicyRequest) -> operations.CreateNetworkGroupPolicyResponse:
        r"""Create a group policy
        Create a group policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/groupPolicies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkGroupPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_group_policy_201_application_json_object = out

        return res

    
    def create_network_meraki_auth_user(self, request: operations.CreateNetworkMerakiAuthUserRequest) -> operations.CreateNetworkMerakiAuthUserResponse:
        r"""Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
        Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/merakiAuthUsers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkMerakiAuthUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_meraki_auth_user_201_application_json_object = out

        return res

    
    def create_network_mqtt_broker(self, request: operations.CreateNetworkMqttBrokerRequest) -> operations.CreateNetworkMqttBrokerResponse:
        r"""Add an MQTT broker
        Add an MQTT broker
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/mqttBrokers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkMqttBrokerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_mqtt_broker_201_application_json_object = out

        return res

    
    def create_network_pii_request(self, request: operations.CreateNetworkPiiRequestRequest) -> operations.CreateNetworkPiiRequestResponse:
        r"""Submit a new delete or restrict processing PII request
        Submit a new delete or restrict processing PII request
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/requests
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkPiiRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_pii_request_201_application_json_object = out

        return res

    
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

    
    def create_organization_network(self, request: operations.CreateOrganizationNetworkRequest) -> operations.CreateOrganizationNetworkResponse:
        r"""Create a network
        Create a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/networks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_network_201_application_json_object = out

        return res

    
    def delete_network(self, request: operations.DeleteNetworkRequest) -> operations.DeleteNetworkResponse:
        r"""Delete a network
        Delete a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_floor_plan(self, request: operations.DeleteNetworkFloorPlanRequest) -> operations.DeleteNetworkFloorPlanResponse:
        r"""Destroy a floor plan
        Destroy a floor plan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/floorPlans/{floorPlanId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkFloorPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_group_policy(self, request: operations.DeleteNetworkGroupPolicyRequest) -> operations.DeleteNetworkGroupPolicyResponse:
        r"""Delete a group policy
        Delete a group policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/groupPolicies/{groupPolicyId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkGroupPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_meraki_auth_user(self, request: operations.DeleteNetworkMerakiAuthUserRequest) -> operations.DeleteNetworkMerakiAuthUserResponse:
        r"""Deauthorize a user
        Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkMerakiAuthUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_mqtt_broker(self, request: operations.DeleteNetworkMqttBrokerRequest) -> operations.DeleteNetworkMqttBrokerResponse:
        r"""Delete an MQTT broker
        Delete an MQTT broker
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/mqttBrokers/{mqttBrokerId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkMqttBrokerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_pii_request(self, request: operations.DeleteNetworkPiiRequestRequest) -> operations.DeleteNetworkPiiRequestResponse:
        r"""Delete a restrict processing PII request
        Delete a restrict processing PII request
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/requests/{requestId}
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests/{requestId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkPiiRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

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

    
    def get_network(self, request: operations.GetNetworkRequest) -> operations.GetNetworkResponse:
        r"""Return a network
        Return a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_200_application_json_object = out

        return res

    
    def get_network_alerts_settings(self, request: operations.GetNetworkAlertsSettingsRequest) -> operations.GetNetworkAlertsSettingsResponse:
        r"""Return the alert configuration for this network
        Return the alert configuration for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/alerts/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkAlertsSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_alerts_settings_200_application_json_object = out

        return res

    
    def get_network_bluetooth_client(self, request: operations.GetNetworkBluetoothClientRequest) -> operations.GetNetworkBluetoothClientResponse:
        r"""Return a Bluetooth client
        Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/bluetoothClients/{bluetoothClientId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkBluetoothClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_bluetooth_client_200_application_json_object = out

        return res

    
    def get_network_bluetooth_clients(self, request: operations.GetNetworkBluetoothClientsRequest) -> operations.GetNetworkBluetoothClientsResponse:
        r"""List the Bluetooth clients seen by APs in this network
        List the Bluetooth clients seen by APs in this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/bluetoothClients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkBluetoothClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_bluetooth_clients_200_application_json_object = out

        return res

    
    def get_network_client(self, request: operations.GetNetworkClientRequest) -> operations.GetNetworkClientResponse:
        r"""Return the client associated with the given identifier
        Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_200_application_json_object = out

        return res

    
    def get_network_client_policy(self, request: operations.GetNetworkClientPolicyRequest) -> operations.GetNetworkClientPolicyResponse:
        r"""Return the policy assigned to a client on the network
        Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/policy", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_policy_200_application_json_object = out

        return res

    
    def get_network_client_splash_authorization_status(self, request: operations.GetNetworkClientSplashAuthorizationStatusRequest) -> operations.GetNetworkClientSplashAuthorizationStatusResponse:
        r"""Return the splash authorization for a client, for each SSID they've associated with through splash
        Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientSplashAuthorizationStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_splash_authorization_status_200_application_json_object = out

        return res

    
    def get_network_client_traffic_history(self, request: operations.GetNetworkClientTrafficHistoryRequest) -> operations.GetNetworkClientTrafficHistoryResponse:
        r"""Return the client's network traffic data over time
        Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/trafficHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientTrafficHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_traffic_history_200_application_json_object = out

        return res

    
    def get_network_client_usage_history(self, request: operations.GetNetworkClientUsageHistoryRequest) -> operations.GetNetworkClientUsageHistoryResponse:
        r"""Return the client's daily usage history
        Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/usageHistory", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_usage_history_200_application_json_object = out

        return res

    
    def get_network_clients(self, request: operations.GetNetworkClientsRequest) -> operations.GetNetworkClientsResponse:
        r"""List the clients that have used this network in the timespan
        List the clients that have used this network in the timespan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_200_application_json_object = out

        return res

    
    def get_network_clients_application_usage(self, request: operations.GetNetworkClientsApplicationUsageRequest) -> operations.GetNetworkClientsApplicationUsageResponse:
        r"""Return the application usage data for clients
        Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/applicationUsage", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsApplicationUsageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_application_usage_200_application_json_object = out

        return res

    
    def get_network_clients_overview(self, request: operations.GetNetworkClientsOverviewRequest) -> operations.GetNetworkClientsOverviewResponse:
        r"""Return overview statistics for network clients
        Return overview statistics for network clients
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/overview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_overview_200_application_json_object = out

        return res

    
    def get_network_clients_usage_histories(self, request: operations.GetNetworkClientsUsageHistoriesRequest) -> operations.GetNetworkClientsUsageHistoriesResponse:
        r"""Return the usage histories for clients
        Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/usageHistories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsUsageHistoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_usage_histories_200_application_json_object = out

        return res

    
    def get_network_devices(self, request: operations.GetNetworkDevicesRequest) -> operations.GetNetworkDevicesResponse:
        r"""List the devices in a network
        List the devices in a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/devices", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_devices_200_application_json_object = out

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

    
    def get_network_firmware_upgrades(self, request: operations.GetNetworkFirmwareUpgradesRequest) -> operations.GetNetworkFirmwareUpgradesResponse:
        r"""Get firmware upgrade information for a network
        Get firmware upgrade information for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/firmwareUpgrades", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkFirmwareUpgradesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_firmware_upgrades_200_application_json_object = out

        return res

    
    def get_network_floor_plan(self, request: operations.GetNetworkFloorPlanRequest) -> operations.GetNetworkFloorPlanResponse:
        r"""Find a floor plan by ID
        Find a floor plan by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/floorPlans/{floorPlanId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkFloorPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_floor_plan_200_application_json_object = out

        return res

    
    def get_network_floor_plans(self, request: operations.GetNetworkFloorPlansRequest) -> operations.GetNetworkFloorPlansResponse:
        r"""List the floor plans that belong to your network
        List the floor plans that belong to your network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/floorPlans", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkFloorPlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_floor_plans_200_application_json_object = out

        return res

    
    def get_network_group_policies(self, request: operations.GetNetworkGroupPoliciesRequest) -> operations.GetNetworkGroupPoliciesResponse:
        r"""List the group policies in a network
        List the group policies in a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/groupPolicies", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkGroupPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_group_policies_200_application_json_object = out

        return res

    
    def get_network_group_policy(self, request: operations.GetNetworkGroupPolicyRequest) -> operations.GetNetworkGroupPolicyResponse:
        r"""Display a group policy
        Display a group policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/groupPolicies/{groupPolicyId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkGroupPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_group_policy_200_application_json_object = out

        return res

    
    def get_network_meraki_auth_user(self, request: operations.GetNetworkMerakiAuthUserRequest) -> operations.GetNetworkMerakiAuthUserResponse:
        r"""Return the Meraki Auth splash guest, RADIUS, or client VPN user
        Return the Meraki Auth splash guest, RADIUS, or client VPN user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkMerakiAuthUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_meraki_auth_user_200_application_json_object = out

        return res

    
    def get_network_meraki_auth_users(self, request: operations.GetNetworkMerakiAuthUsersRequest) -> operations.GetNetworkMerakiAuthUsersResponse:
        r"""List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
        List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/merakiAuthUsers", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkMerakiAuthUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_meraki_auth_users_200_application_json_object = out

        return res

    
    def get_network_mqtt_broker(self, request: operations.GetNetworkMqttBrokerRequest) -> operations.GetNetworkMqttBrokerResponse:
        r"""Return an MQTT broker
        Return an MQTT broker
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/mqttBrokers/{mqttBrokerId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkMqttBrokerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_mqtt_broker_200_application_json_object = out

        return res

    
    def get_network_mqtt_brokers(self, request: operations.GetNetworkMqttBrokersRequest) -> operations.GetNetworkMqttBrokersResponse:
        r"""List the MQTT brokers for this network
        List the MQTT brokers for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/mqttBrokers", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkMqttBrokersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_mqtt_brokers_200_application_json_object = out

        return res

    
    def get_network_netflow(self, request: operations.GetNetworkNetflowRequest) -> operations.GetNetworkNetflowResponse:
        r"""Return the NetFlow traffic reporting settings for a network
        Return the NetFlow traffic reporting settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/netflow", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkNetflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_netflow_200_application_json_object = out

        return res

    
    def get_network_network_health_channel_utilization(self, request: operations.GetNetworkNetworkHealthChannelUtilizationRequest) -> operations.GetNetworkNetworkHealthChannelUtilizationResponse:
        r"""Get the channel utilization over each radio for all APs in a network.
        Get the channel utilization over each radio for all APs in a network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/networkHealth/channelUtilization", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkNetworkHealthChannelUtilizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_network_health_channel_utilization_200_application_json_object = out

        return res

    
    def get_network_pii_pii_keys(self, request: operations.GetNetworkPiiPiiKeysRequest) -> operations.GetNetworkPiiPiiKeysResponse:
        r"""List the keys required to access Personally Identifiable Information (PII) for a given identifier
        List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key \"0\" containing the applicable keys.
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/piiKeys
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/piiKeys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiPiiKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_pii_keys_200_application_json_object = out

        return res

    
    def get_network_pii_request(self, request: operations.GetNetworkPiiRequestRequest) -> operations.GetNetworkPiiRequestResponse:
        r"""Return a PII request
        Return a PII request
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/requests/{requestId}
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests/{requestId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_request_200_application_json_object = out

        return res

    
    def get_network_pii_requests(self, request: operations.GetNetworkPiiRequestsRequest) -> operations.GetNetworkPiiRequestsResponse:
        r"""List the PII requests for this network or organization
        List the PII requests for this network or organization
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/requests
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/requests", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_requests_200_application_json_object = out

        return res

    
    def get_network_pii_sm_devices_for_key(self, request: operations.GetNetworkPiiSmDevicesForKeyRequest) -> operations.GetNetworkPiiSmDevicesForKeyResponse:
        r"""Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
        Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/smDevicesForKey
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/smDevicesForKey", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiSmDevicesForKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_sm_devices_for_key_200_application_json_object = out

        return res

    
    def get_network_pii_sm_owners_for_key(self, request: operations.GetNetworkPiiSmOwnersForKeyRequest) -> operations.GetNetworkPiiSmOwnersForKeyResponse:
        r"""Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
        Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/smOwnersForKey
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/smOwnersForKey", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiSmOwnersForKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_sm_owners_for_key_200_application_json_object = out

        return res

    
    def get_network_settings(self, request: operations.GetNetworkSettingsRequest) -> operations.GetNetworkSettingsResponse:
        r"""Return the settings for a network
        Return the settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_settings_200_application_json_object = out

        return res

    
    def get_network_snmp(self, request: operations.GetNetworkSnmpRequest) -> operations.GetNetworkSnmpResponse:
        r"""Return the SNMP settings for a network
        Return the SNMP settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/snmp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSnmpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_snmp_200_application_json_object = out

        return res

    
    def get_network_splash_login_attempts(self, request: operations.GetNetworkSplashLoginAttemptsRequest) -> operations.GetNetworkSplashLoginAttemptsResponse:
        r"""List the splash login attempts for a network
        List the splash login attempts for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/splashLoginAttempts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSplashLoginAttemptsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_splash_login_attempts_200_application_json_object = out

        return res

    
    def get_network_syslog_servers(self, request: operations.GetNetworkSyslogServersRequest) -> operations.GetNetworkSyslogServersResponse:
        r"""List the syslog servers for a network
        List the syslog servers for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/syslogServers", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSyslogServersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_syslog_servers_200_application_json_object = out

        return res

    
    def get_network_traffic(self, request: operations.GetNetworkTrafficRequest) -> operations.GetNetworkTrafficResponse:
        r"""Return the traffic analysis data for this network
        Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/traffic", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkTrafficResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_traffic_200_application_json_object = out

        return res

    
    def get_network_traffic_analysis(self, request: operations.GetNetworkTrafficAnalysisRequest) -> operations.GetNetworkTrafficAnalysisResponse:
        r"""Return the traffic analysis settings for a network
        Return the traffic analysis settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/trafficAnalysis", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkTrafficAnalysisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_traffic_analysis_200_application_json_object = out

        return res

    
    def get_network_traffic_shaping_application_categories(self, request: operations.GetNetworkTrafficShapingApplicationCategoriesRequest) -> operations.GetNetworkTrafficShapingApplicationCategoriesResponse:
        r"""Returns the application categories for traffic shaping rules.
        Returns the application categories for traffic shaping rules.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/trafficShaping/applicationCategories", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkTrafficShapingApplicationCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_traffic_shaping_application_categories_200_application_json_object = out

        return res

    
    def get_network_traffic_shaping_dscp_tagging_options(self, request: operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest) -> operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse:
        r"""Returns the available DSCP tagging options for your traffic shaping rules.
        Returns the available DSCP tagging options for your traffic shaping rules.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/trafficShaping/dscpTaggingOptions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_traffic_shaping_dscp_tagging_options_200_application_json_object = out

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

    
    def get_organization_networks(self, request: operations.GetOrganizationNetworksRequest) -> operations.GetOrganizationNetworksResponse:
        r"""List the networks that the user has privileges on in an organization
        List the networks that the user has privileges on in an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/networks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationNetworksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_networks_200_application_json_object = out

        return res

    
    def provision_network_clients(self, request: operations.ProvisionNetworkClientsRequest) -> operations.ProvisionNetworkClientsResponse:
        r"""Provisions a client with a name and policy
        Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/provision", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProvisionNetworkClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.provision_network_clients_201_application_json_object = out

        return res

    
    def remove_network_devices(self, request: operations.RemoveNetworkDevicesRequest) -> operations.RemoveNetworkDevicesResponse:
        r"""Remove a single device
        Remove a single device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/devices/remove", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveNetworkDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def split_network(self, request: operations.SplitNetworkRequest) -> operations.SplitNetworkResponse:
        r"""Split a combined network into individual networks for each type of device
        Split a combined network into individual networks for each type of device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/split", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SplitNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.split_network_200_application_json_object = out

        return res

    
    def unbind_network(self, request: operations.UnbindNetworkRequest) -> operations.UnbindNetworkResponse:
        r"""Unbind a network from a template.
        Unbind a network from a template.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/unbind", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnbindNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.unbind_network_200_application_json_object = out

        return res

    
    def update_network(self, request: operations.UpdateNetworkRequest) -> operations.UpdateNetworkResponse:
        r"""Update a network
        Update a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_200_application_json_object = out

        return res

    
    def update_network_alerts_settings(self, request: operations.UpdateNetworkAlertsSettingsRequest) -> operations.UpdateNetworkAlertsSettingsResponse:
        r"""Update the alert configuration for this network
        Update the alert configuration for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/alerts/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkAlertsSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_alerts_settings_200_application_json_object = out

        return res

    
    def update_network_client_policy(self, request: operations.UpdateNetworkClientPolicyRequest) -> operations.UpdateNetworkClientPolicyResponse:
        r"""Update the policy assigned to a client on the network
        Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/policy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkClientPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_client_policy_200_application_json_object = out

        return res

    
    def update_network_client_splash_authorization_status(self, request: operations.UpdateNetworkClientSplashAuthorizationStatusRequest) -> operations.UpdateNetworkClientSplashAuthorizationStatusResponse:
        r"""Update a client's splash authorization
        Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkClientSplashAuthorizationStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_client_splash_authorization_status_200_application_json_object = out

        return res

    
    def update_network_firmware_upgrades(self, request: operations.UpdateNetworkFirmwareUpgradesRequest) -> operations.UpdateNetworkFirmwareUpgradesResponse:
        r"""Update firmware upgrade information for a network
        Update firmware upgrade information for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/firmwareUpgrades", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkFirmwareUpgradesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_firmware_upgrades_200_application_json_object = out

        return res

    
    def update_network_floor_plan(self, request: operations.UpdateNetworkFloorPlanRequest) -> operations.UpdateNetworkFloorPlanResponse:
        r"""Update a floor plan's geolocation and other meta data
        Update a floor plan's geolocation and other meta data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/floorPlans/{floorPlanId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkFloorPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_floor_plan_200_application_json_object = out

        return res

    
    def update_network_group_policy(self, request: operations.UpdateNetworkGroupPolicyRequest) -> operations.UpdateNetworkGroupPolicyResponse:
        r"""Update a group policy
        Update a group policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/groupPolicies/{groupPolicyId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkGroupPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_group_policy_200_application_json_object = out

        return res

    
    def update_network_meraki_auth_user(self, request: operations.UpdateNetworkMerakiAuthUserRequest) -> operations.UpdateNetworkMerakiAuthUserResponse:
        r"""Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
        Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkMerakiAuthUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_meraki_auth_user_200_application_json_object = out

        return res

    
    def update_network_mqtt_broker(self, request: operations.UpdateNetworkMqttBrokerRequest) -> operations.UpdateNetworkMqttBrokerResponse:
        r"""Update an MQTT broker
        Update an MQTT broker
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/mqttBrokers/{mqttBrokerId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkMqttBrokerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_mqtt_broker_200_application_json_object = out

        return res

    
    def update_network_netflow(self, request: operations.UpdateNetworkNetflowRequest) -> operations.UpdateNetworkNetflowResponse:
        r"""Update the NetFlow traffic reporting settings for a network
        Update the NetFlow traffic reporting settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/netflow", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkNetflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_netflow_200_application_json_object = out

        return res

    
    def update_network_settings(self, request: operations.UpdateNetworkSettingsRequest) -> operations.UpdateNetworkSettingsResponse:
        r"""Update the settings for a network
        Update the settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_settings_200_application_json_object = out

        return res

    
    def update_network_snmp(self, request: operations.UpdateNetworkSnmpRequest) -> operations.UpdateNetworkSnmpResponse:
        r"""Update the SNMP settings for a network
        Update the SNMP settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/snmp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSnmpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_snmp_200_application_json_object = out

        return res

    
    def update_network_syslog_servers(self, request: operations.UpdateNetworkSyslogServersRequest) -> operations.UpdateNetworkSyslogServersResponse:
        r"""Update the syslog servers for a network
        Update the syslog servers for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/syslogServers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSyslogServersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_syslog_servers_200_application_json_object = out

        return res

    
    def update_network_traffic_analysis(self, request: operations.UpdateNetworkTrafficAnalysisRequest) -> operations.UpdateNetworkTrafficAnalysisResponse:
        r"""Update the traffic analysis settings for a network
        Update the traffic analysis settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/trafficAnalysis", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkTrafficAnalysisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_traffic_analysis_200_application_json_object = out

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

    