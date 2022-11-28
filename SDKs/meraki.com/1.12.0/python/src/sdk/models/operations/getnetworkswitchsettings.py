from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchSettingsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchSettingsRequest:
    path_params: GetNetworkSwitchSettingsPathParams = field()
    

@dataclass
class GetNetworkSwitchSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
