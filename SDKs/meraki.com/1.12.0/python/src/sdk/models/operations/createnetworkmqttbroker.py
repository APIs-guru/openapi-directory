from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkMqttBrokerPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkMqttBrokerRequestBody:
    host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    

@dataclass
class CreateNetworkMqttBrokerRequest:
    path_params: CreateNetworkMqttBrokerPathParams = field()
    request: CreateNetworkMqttBrokerRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkMqttBrokerResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_mqtt_broker_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
