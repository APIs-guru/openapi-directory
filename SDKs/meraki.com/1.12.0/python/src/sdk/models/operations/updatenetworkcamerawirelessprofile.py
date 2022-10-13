from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkCameraWirelessProfilePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    wireless_profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'wirelessProfileId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkCameraWirelessProfileRequestBodyIdentity:
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
class UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum(str, Enum):
    PSK = "psk"
    EIGHT_THOUSAND_AND_TWENTY_ONEX_RADIUS = "8021x-radius"


@dataclass_json
@dataclass
class UpdateNetworkCameraWirelessProfileRequestBodySsid:
    auth_mode: Optional[UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authMode' }})
    encryption_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionMode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    psk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'psk' }})
    

@dataclass_json
@dataclass
class UpdateNetworkCameraWirelessProfileRequestBody:
    identity: Optional[UpdateNetworkCameraWirelessProfileRequestBodyIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ssid: Optional[UpdateNetworkCameraWirelessProfileRequestBodySsid] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssid' }})
    

@dataclass
class UpdateNetworkCameraWirelessProfileRequest:
    path_params: UpdateNetworkCameraWirelessProfilePathParams = field(default=None)
    request: Optional[UpdateNetworkCameraWirelessProfileRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkCameraWirelessProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_camera_wireless_profile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
