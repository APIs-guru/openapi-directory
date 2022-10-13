from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDevicesSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDevicesSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetDevicesSecurity:
    option1: Optional[GetDevicesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetDevicesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetDevicesRequest:
    security: GetDevicesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDevices200ApplicationJSON:
    data: Optional[List[shared.TrustedDevice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetDevicesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetDevicesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_devices_200_application_json_object: Optional[GetDevices200ApplicationJSON] = field(default=None)
    get_devices_default_application_json_object: Optional[GetDevicesDefaultApplicationJSON] = field(default=None)
    
