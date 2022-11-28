from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkCameraWirelessProfilePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkCameraWirelessProfileRequestBodyIdentity:
    r"""CreateNetworkCameraWirelessProfileRequestBodyIdentity
    The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
    """
    
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
class CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum(str, Enum):
    PSK = "psk"
    EIGHT_THOUSAND_AND_TWENTY_ONEX_RADIUS = "8021x-radius"


@dataclass_json
@dataclass
class CreateNetworkCameraWirelessProfileRequestBodySsid:
    r"""CreateNetworkCameraWirelessProfileRequestBodySsid
    The details of the SSID config.
    """
    
    auth_mode: Optional[CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMode') }})
    encryption_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionMode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    psk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psk') }})
    

@dataclass_json
@dataclass
class CreateNetworkCameraWirelessProfileRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ssid: CreateNetworkCameraWirelessProfileRequestBodySsid = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssid') }})
    identity: Optional[CreateNetworkCameraWirelessProfileRequestBodyIdentity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    

@dataclass
class CreateNetworkCameraWirelessProfileRequest:
    path_params: CreateNetworkCameraWirelessProfilePathParams = field()
    request: CreateNetworkCameraWirelessProfileRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkCameraWirelessProfileResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_camera_wireless_profile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
