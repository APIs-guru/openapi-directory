from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkMqttBrokerPathParams:
    mqtt_broker_id: str = field(metadata={'path_param': { 'field_name': 'mqttBrokerId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkMqttBrokerRequest:
    path_params: GetNetworkMqttBrokerPathParams = field()
    

@dataclass
class GetNetworkMqttBrokerResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_mqtt_broker_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
