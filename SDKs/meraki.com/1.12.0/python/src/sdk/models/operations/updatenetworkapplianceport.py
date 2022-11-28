from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkAppliancePortPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    port_id: str = field(metadata={'path_param': { 'field_name': 'portId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkAppliancePortRequestBody:
    access_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicy') }})
    allowed_vlans: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedVlans') }})
    drop_untagged_traffic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropUntaggedTraffic') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    

@dataclass
class UpdateNetworkAppliancePortRequest:
    path_params: UpdateNetworkAppliancePortPathParams = field()
    request: Optional[UpdateNetworkAppliancePortRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkAppliancePortResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_port_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
