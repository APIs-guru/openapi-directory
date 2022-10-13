from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetTrustedDevicePathParams:
    device_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTrustedDeviceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTrustedDeviceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTrustedDeviceSecurity:
    option1: Optional[GetTrustedDeviceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTrustedDeviceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTrustedDeviceRequest:
    path_params: GetTrustedDevicePathParams = field(default=None)
    security: GetTrustedDeviceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetTrustedDeviceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetTrustedDeviceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trusted_device: Optional[shared.TrustedDevice] = field(default=None)
    get_trusted_device_default_application_json_object: Optional[GetTrustedDeviceDefaultApplicationJSON] = field(default=None)
    
