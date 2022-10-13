from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchSettingsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchSettingsRequest:
    path_params: GetNetworkSwitchSettingsPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
