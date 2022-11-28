from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceVlansSettingsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceVlansSettingsRequestBody:
    vlans_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlansEnabled') }})
    

@dataclass
class UpdateNetworkApplianceVlansSettingsRequest:
    path_params: UpdateNetworkApplianceVlansSettingsPathParams = field()
    request: Optional[UpdateNetworkApplianceVlansSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceVlansSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_vlans_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
