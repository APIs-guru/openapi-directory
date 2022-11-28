from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceVlansSettingsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceVlansSettingsRequest:
    path_params: GetNetworkApplianceVlansSettingsPathParams = field()
    

@dataclass
class GetNetworkApplianceVlansSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_vlans_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
