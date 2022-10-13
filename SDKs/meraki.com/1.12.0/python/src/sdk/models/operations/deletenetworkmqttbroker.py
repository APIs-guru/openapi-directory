from dataclasses import dataclass, field



@dataclass
class DeleteNetworkMqttBrokerPathParams:
    mqtt_broker_id: str = field(default=None, metadata={'path_param': { 'field_name': 'mqttBrokerId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkMqttBrokerRequest:
    path_params: DeleteNetworkMqttBrokerPathParams = field(default=None)
    

@dataclass
class DeleteNetworkMqttBrokerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
