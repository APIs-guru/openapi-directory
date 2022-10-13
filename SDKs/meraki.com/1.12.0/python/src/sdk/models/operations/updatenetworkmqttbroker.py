from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkMqttBrokerPathParams:
    mqtt_broker_id: str = field(default=None, metadata={'path_param': { 'field_name': 'mqttBrokerId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkMqttBrokerRequestBody:
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    

@dataclass
class UpdateNetworkMqttBrokerRequest:
    path_params: UpdateNetworkMqttBrokerPathParams = field(default=None)
    request: Optional[UpdateNetworkMqttBrokerRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkMqttBrokerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_mqtt_broker_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
