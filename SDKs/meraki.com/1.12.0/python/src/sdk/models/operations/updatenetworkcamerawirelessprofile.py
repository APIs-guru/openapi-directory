from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkCameraWirelessProfilePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    wireless_profile_id: str = field(metadata={'path_param': { 'field_name': 'wirelessProfileId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkCameraWirelessProfileRequestBodyIdentity:
    r"""UpdateNetworkCameraWirelessProfileRequestBodyIdentity
    The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
    """
    
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
class UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum(str, Enum):
    PSK = "psk"
    EIGHT_THOUSAND_AND_TWENTY_ONEX_RADIUS = "8021x-radius"


@dataclass_json
@dataclass
class UpdateNetworkCameraWirelessProfileRequestBodySsid:
    r"""UpdateNetworkCameraWirelessProfileRequestBodySsid
    The details of the SSID config.
    """
    
    auth_mode: Optional[UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMode') }})
    encryption_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionMode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    psk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psk') }})
    

@dataclass_json
@dataclass
class UpdateNetworkCameraWirelessProfileRequestBody:
    identity: Optional[UpdateNetworkCameraWirelessProfileRequestBodyIdentity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ssid: Optional[UpdateNetworkCameraWirelessProfileRequestBodySsid] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssid') }})
    

@dataclass
class UpdateNetworkCameraWirelessProfileRequest:
    path_params: UpdateNetworkCameraWirelessProfilePathParams = field()
    request: Optional[UpdateNetworkCameraWirelessProfileRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkCameraWirelessProfileResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_camera_wireless_profile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
