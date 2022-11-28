from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessSettingsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessSettingsRequest:
    path_params: GetNetworkWirelessSettingsPathParams = field()
    

@dataclass
class GetNetworkWirelessSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_wireless_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
