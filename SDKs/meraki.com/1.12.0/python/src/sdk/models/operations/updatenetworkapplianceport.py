from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkAppliancePortPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    port_id: str = field(default=None, metadata={'path_param': { 'field_name': 'portId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkAppliancePortRequestBody:
    access_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicy' }})
    allowed_vlans: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedVlans' }})
    drop_untagged_traffic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dropUntaggedTraffic' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    

@dataclass
class UpdateNetworkAppliancePortRequest:
    path_params: UpdateNetworkAppliancePortPathParams = field(default=None)
    request: Optional[UpdateNetworkAppliancePortRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkAppliancePortResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_port_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
