from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class RemoveNetworkDevicesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RemoveNetworkDevicesRequestBody:
    serial: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    

@dataclass
class RemoveNetworkDevicesRequest:
    path_params: RemoveNetworkDevicesPathParams = field()
    request: RemoveNetworkDevicesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveNetworkDevicesResponse:
    content_type: str = field()
    status_code: int = field()
    
