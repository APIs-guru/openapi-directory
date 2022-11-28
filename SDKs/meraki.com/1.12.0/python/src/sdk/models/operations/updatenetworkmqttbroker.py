from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkMqttBrokerPathParams:
    mqtt_broker_id: str = field(metadata={'path_param': { 'field_name': 'mqttBrokerId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkMqttBrokerRequestBody:
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    

@dataclass
class UpdateNetworkMqttBrokerRequest:
    path_params: UpdateNetworkMqttBrokerPathParams = field()
    request: Optional[UpdateNetworkMqttBrokerRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkMqttBrokerResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_mqtt_broker_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
