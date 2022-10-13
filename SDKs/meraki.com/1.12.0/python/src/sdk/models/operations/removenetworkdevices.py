from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass
class RemoveNetworkDevicesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RemoveNetworkDevicesRequestBody:
    serial: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    

@dataclass
class RemoveNetworkDevicesRequest:
    path_params: RemoveNetworkDevicesPathParams = field(default=None)
    request: RemoveNetworkDevicesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveNetworkDevicesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
