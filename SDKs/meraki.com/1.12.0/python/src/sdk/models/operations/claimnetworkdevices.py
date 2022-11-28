from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ClaimNetworkDevicesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ClaimNetworkDevicesRequestBody:
    serials: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serials') }})
    

@dataclass
class ClaimNetworkDevicesRequest:
    path_params: ClaimNetworkDevicesPathParams = field()
    request: ClaimNetworkDevicesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ClaimNetworkDevicesResponse:
    content_type: str = field()
    status_code: int = field()
    
