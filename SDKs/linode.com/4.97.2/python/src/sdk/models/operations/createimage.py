from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateImageSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateImageSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateImageSecurity:
    option1: Optional[CreateImageSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateImageSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateImageRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateImageSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateImageDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateImageResponse:
    content_type: str = field(default=None)
    image_private: Optional[shared.ImagePrivate] = field(default=None)
    status_code: int = field(default=None)
    create_image_default_application_json_object: Optional[CreateImageDefaultApplicationJSON] = field(default=None)
    
