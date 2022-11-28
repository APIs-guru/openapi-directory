from dataclasses import dataclass, field



@dataclass
class DeleteNetworkMqttBrokerPathParams:
    mqtt_broker_id: str = field(metadata={'path_param': { 'field_name': 'mqttBrokerId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkMqttBrokerRequest:
    path_params: DeleteNetworkMqttBrokerPathParams = field()
    

@dataclass
class DeleteNetworkMqttBrokerResponse:
    content_type: str = field()
    status_code: int = field()
    
