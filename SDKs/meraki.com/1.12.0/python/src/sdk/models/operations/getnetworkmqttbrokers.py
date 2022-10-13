from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkMqttBrokersPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkMqttBrokersRequest:
    path_params: GetNetworkMqttBrokersPathParams = field(default=None)
    

@dataclass
class GetNetworkMqttBrokersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_mqtt_brokers_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
