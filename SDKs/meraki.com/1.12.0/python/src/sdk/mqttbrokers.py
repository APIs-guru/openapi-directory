import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class MqttBrokers:
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

    