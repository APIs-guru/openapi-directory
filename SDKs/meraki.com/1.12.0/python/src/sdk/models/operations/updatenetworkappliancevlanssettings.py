from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceVlansSettingsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceVlansSettingsRequestBody:
    vlans_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlansEnabled' }})
    

@dataclass
class UpdateNetworkApplianceVlansSettingsRequest:
    path_params: UpdateNetworkApplianceVlansSettingsPathParams = field(default=None)
    request: Optional[UpdateNetworkApplianceVlansSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceVlansSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_vlans_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
