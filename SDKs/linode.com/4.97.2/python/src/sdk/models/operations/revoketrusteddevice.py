from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RevokeTrustedDevicePathParams:
    device_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeTrustedDeviceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RevokeTrustedDeviceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RevokeTrustedDeviceSecurity:
    option1: Optional[RevokeTrustedDeviceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[RevokeTrustedDeviceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class RevokeTrustedDeviceRequest:
    path_params: RevokeTrustedDevicePathParams = field(default=None)
    security: RevokeTrustedDeviceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class RevokeTrustedDeviceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class RevokeTrustedDeviceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    revoke_trusted_device_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    revoke_trusted_device_default_application_json_object: Optional[RevokeTrustedDeviceDefaultApplicationJSON] = field(default=None)
    
