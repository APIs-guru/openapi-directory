from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkApplianceVlanPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkApplianceVlanRequestBody:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    appliance_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applianceIp') }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupPolicyId') }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    

@dataclass
class CreateNetworkApplianceVlanRequest:
    path_params: CreateNetworkApplianceVlanPathParams = field()
    request: CreateNetworkApplianceVlanRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkApplianceVlanResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_appliance_vlan_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
