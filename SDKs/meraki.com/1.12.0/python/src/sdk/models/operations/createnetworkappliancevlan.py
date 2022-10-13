from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkApplianceVlanPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkApplianceVlanRequestBody:
    appliance_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applianceIp' }})
    group_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPolicyId' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet' }})
    

@dataclass
class CreateNetworkApplianceVlanRequest:
    path_params: CreateNetworkApplianceVlanPathParams = field(default=None)
    request: CreateNetworkApplianceVlanRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkApplianceVlanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_appliance_vlan_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
