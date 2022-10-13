from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ResizeVolumePathParams:
    volume_id: int = field(default=None, metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ResizeVolumeRequestBody:
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    

@dataclass
class ResizeVolumeSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ResizeVolumeSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ResizeVolumeSecurity:
    option1: Optional[ResizeVolumeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ResizeVolumeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ResizeVolumeRequest:
    path_params: ResizeVolumePathParams = field(default=None)
    request: ResizeVolumeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ResizeVolumeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ResizeVolumeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class ResizeVolumeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    resize_volume_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    resize_volume_default_application_json_object: Optional[ResizeVolumeDefaultApplicationJSON] = field(default=None)
    
