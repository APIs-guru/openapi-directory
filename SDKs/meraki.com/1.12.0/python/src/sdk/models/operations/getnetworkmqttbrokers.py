from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkMqttBrokersPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkMqttBrokersRequest:
    path_params: GetNetworkMqttBrokersPathParams = field()
    

@dataclass
class GetNetworkMqttBrokersResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_mqtt_brokers_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
