from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSwitchMtuPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchMtuRequestBodyOverrides:
    mtu_size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mtuSize' }})
    switch_profiles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switchProfiles' }})
    switches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switches' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchMtuRequestBody:
    default_mtu_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultMtuSize' }})
    overrides: Optional[List[UpdateNetworkSwitchMtuRequestBodyOverrides]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrides' }})
    

@dataclass
class UpdateNetworkSwitchMtuRequest:
    path_params: UpdateNetworkSwitchMtuPathParams = field(default=None)
    request: Optional[UpdateNetworkSwitchMtuRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchMtuResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_switch_mtu_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
