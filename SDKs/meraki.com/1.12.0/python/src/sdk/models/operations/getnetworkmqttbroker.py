from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkMqttBrokerPathParams:
    mqtt_broker_id: str = field(default=None, metadata={'path_param': { 'field_name': 'mqttBrokerId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkMqttBrokerRequest:
    path_params: GetNetworkMqttBrokerPathParams = field(default=None)
    

@dataclass
class GetNetworkMqttBrokerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_mqtt_broker_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
