from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceSingleLanPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceSingleLanRequestBody:
    appliance_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applianceIp') }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    

@dataclass
class UpdateNetworkApplianceSingleLanRequest:
    path_params: UpdateNetworkApplianceSingleLanPathParams = field()
    request: Optional[UpdateNetworkApplianceSingleLanRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceSingleLanResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_single_lan_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
