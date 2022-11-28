from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ResizeVolumePathParams:
    volume_id: int = field(metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ResizeVolumeRequestBody:
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass
class ResizeVolumeSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class ResizeVolumeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class ResizeVolumeRequest:
    path_params: ResizeVolumePathParams = field()
    request: ResizeVolumeRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: ResizeVolumeSecurity = field()
    

@dataclass
class ResizeVolumeResponse:
    content_type: str = field()
    status_code: int = field()
    resize_volume_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    resize_volume_default_application_json_object: Optional[ResizeVolumeDefaultApplicationJSON] = field(default=None)
    
