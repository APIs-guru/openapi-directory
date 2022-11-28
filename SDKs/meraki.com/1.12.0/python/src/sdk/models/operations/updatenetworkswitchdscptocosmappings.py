from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSwitchDscpToCosMappingsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings:
    cos: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cos') }})
    dscp: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscp') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchDscpToCosMappingsRequestBody:
    mappings: List[UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mappings') }})
    

@dataclass
class UpdateNetworkSwitchDscpToCosMappingsRequest:
    path_params: UpdateNetworkSwitchDscpToCosMappingsPathParams = field()
    request: UpdateNetworkSwitchDscpToCosMappingsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchDscpToCosMappingsResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_switch_dscp_to_cos_mappings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
