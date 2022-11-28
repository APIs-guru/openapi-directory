from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceWarmSparePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceWarmSpareRequestBody:
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    spare_serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spareSerial') }})
    uplink_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uplinkMode') }})
    virtual_ip1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualIp1') }})
    virtual_ip2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualIp2') }})
    

@dataclass
class UpdateNetworkApplianceWarmSpareRequest:
    path_params: UpdateNetworkApplianceWarmSparePathParams = field()
    request: UpdateNetworkApplianceWarmSpareRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceWarmSpareResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_warm_spare_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
