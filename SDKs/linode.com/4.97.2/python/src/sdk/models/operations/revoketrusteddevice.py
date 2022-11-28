from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RevokeTrustedDevicePathParams:
    device_id: int = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeTrustedDeviceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class RevokeTrustedDeviceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class RevokeTrustedDeviceRequest:
    path_params: RevokeTrustedDevicePathParams = field()
    security: RevokeTrustedDeviceSecurity = field()
    

@dataclass
class RevokeTrustedDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    revoke_trusted_device_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    revoke_trusted_device_default_application_json_object: Optional[RevokeTrustedDeviceDefaultApplicationJSON] = field(default=None)
    
