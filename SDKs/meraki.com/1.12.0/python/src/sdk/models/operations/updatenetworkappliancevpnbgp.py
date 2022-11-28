from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceVpnBgpPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceVpnBgpRequestBodyNeighbors:
    ebgp_hold_timer: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebgpHoldTimer') }})
    ebgp_multihop: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebgpMultihop') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    remote_as_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAsNumber') }})
    allow_transit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowTransit') }})
    receive_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiveLimit') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceVpnBgpRequestBody:
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    as_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asNumber') }})
    ibgp_hold_timer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ibgpHoldTimer') }})
    neighbors: Optional[List[UpdateNetworkApplianceVpnBgpRequestBodyNeighbors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('neighbors') }})
    

@dataclass
class UpdateNetworkApplianceVpnBgpRequest:
    path_params: UpdateNetworkApplianceVpnBgpPathParams = field()
    request: UpdateNetworkApplianceVpnBgpRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceVpnBgpResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_vpn_bgp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
