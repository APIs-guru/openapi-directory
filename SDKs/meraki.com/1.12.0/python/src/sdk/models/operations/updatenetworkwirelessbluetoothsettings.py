from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessBluetoothSettingsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum(str, Enum):
    UNIQUE = "Unique"
    NON_UNIQUE = "Non-unique"


@dataclass_json
@dataclass
class UpdateNetworkWirelessBluetoothSettingsRequestBody:
    advertising_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertisingEnabled' }})
    major: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'major' }})
    major_minor_assignment_mode: Optional[UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'majorMinorAssignmentMode' }})
    minor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minor' }})
    scanning_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scanningEnabled' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    

@dataclass
class UpdateNetworkWirelessBluetoothSettingsRequest:
    path_params: UpdateNetworkWirelessBluetoothSettingsPathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessBluetoothSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessBluetoothSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_bluetooth_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
