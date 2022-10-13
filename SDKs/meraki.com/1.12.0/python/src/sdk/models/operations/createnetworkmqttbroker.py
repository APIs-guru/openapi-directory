from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkMqttBrokerPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkMqttBrokerRequestBody:
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    

@dataclass
class CreateNetworkMqttBrokerRequest:
    path_params: CreateNetworkMqttBrokerPathParams = field(default=None)
    request: CreateNetworkMqttBrokerRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkMqttBrokerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_mqtt_broker_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
