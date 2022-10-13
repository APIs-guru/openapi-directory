from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceVpnBgpPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceVpnBgpRequestBodyNeighbors:
    allow_transit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowTransit' }})
    ebgp_hold_timer: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ebgpHoldTimer' }})
    ebgp_multihop: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ebgpMultihop' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    receive_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiveLimit' }})
    remote_as_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteAsNumber' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceVpnBgpRequestBody:
    as_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asNumber' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    ibgp_hold_timer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ibgpHoldTimer' }})
    neighbors: Optional[List[UpdateNetworkApplianceVpnBgpRequestBodyNeighbors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'neighbors' }})
    

@dataclass
class UpdateNetworkApplianceVpnBgpRequest:
    path_params: UpdateNetworkApplianceVpnBgpPathParams = field(default=None)
    request: UpdateNetworkApplianceVpnBgpRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceVpnBgpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_vpn_bgp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
