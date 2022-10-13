from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSwitchStpPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchStpRequestBodyStpBridgePriority:
    stacks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stacks' }})
    stp_priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stpPriority' }})
    switch_profiles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switchProfiles' }})
    switches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switches' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchStpRequestBody:
    rstp_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rstpEnabled' }})
    stp_bridge_priority: Optional[List[UpdateNetworkSwitchStpRequestBodyStpBridgePriority]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stpBridgePriority' }})
    

@dataclass
class UpdateNetworkSwitchStpRequest:
    path_params: UpdateNetworkSwitchStpPathParams = field(default=None)
    request: Optional[UpdateNetworkSwitchStpRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchStpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_switch_stp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
