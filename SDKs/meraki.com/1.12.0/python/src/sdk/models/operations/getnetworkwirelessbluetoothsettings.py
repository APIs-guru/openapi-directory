from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessBluetoothSettingsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessBluetoothSettingsRequest:
    path_params: GetNetworkWirelessBluetoothSettingsPathParams = field(default=None)
    

@dataclass
class GetNetworkWirelessBluetoothSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_wireless_bluetooth_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
