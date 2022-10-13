from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkCameraWirelessProfilePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkCameraWirelessProfileRequestBodyIdentity:
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
class CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum(str, Enum):
    PSK = "psk"
    EIGHT_THOUSAND_AND_TWENTY_ONEX_RADIUS = "8021x-radius"


@dataclass_json
@dataclass
class CreateNetworkCameraWirelessProfileRequestBodySsid:
    auth_mode: Optional[CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authMode' }})
    encryption_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionMode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    psk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'psk' }})
    

@dataclass_json
@dataclass
class CreateNetworkCameraWirelessProfileRequestBody:
    identity: Optional[CreateNetworkCameraWirelessProfileRequestBodyIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ssid: CreateNetworkCameraWirelessProfileRequestBodySsid = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssid' }})
    

@dataclass
class CreateNetworkCameraWirelessProfileRequest:
    path_params: CreateNetworkCameraWirelessProfilePathParams = field(default=None)
    request: CreateNetworkCameraWirelessProfileRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkCameraWirelessProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_camera_wireless_profile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
