from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateImagePathParams:
    image_id: str = field(default=None, metadata={'path_param': { 'field_name': 'imageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateImageSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateImageSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateImageSecurity:
    option1: Optional[UpdateImageSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateImageSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateImageRequest:
    path_params: UpdateImagePathParams = field(default=None)
    request: shared.ImagePrivate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateImageSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateImageDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateImageResponse:
    content_type: str = field(default=None)
    image_private: Optional[shared.ImagePrivate] = field(default=None)
    status_code: int = field(default=None)
    update_image_default_application_json_object: Optional[UpdateImageDefaultApplicationJSON] = field(default=None)
    
