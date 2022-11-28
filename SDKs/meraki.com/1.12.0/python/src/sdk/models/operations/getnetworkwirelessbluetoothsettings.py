from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessBluetoothSettingsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessBluetoothSettingsRequest:
    path_params: GetNetworkWirelessBluetoothSettingsPathParams = field()
    

@dataclass
class GetNetworkWirelessBluetoothSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_wireless_bluetooth_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
