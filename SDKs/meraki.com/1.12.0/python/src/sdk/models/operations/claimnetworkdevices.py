from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass
class ClaimNetworkDevicesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ClaimNetworkDevicesRequestBody:
    serials: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serials' }})
    

@dataclass
class ClaimNetworkDevicesRequest:
    path_params: ClaimNetworkDevicesPathParams = field(default=None)
    request: ClaimNetworkDevicesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ClaimNetworkDevicesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
