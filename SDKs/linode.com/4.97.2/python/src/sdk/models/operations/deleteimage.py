from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteImagePathParams:
    image_id: str = field(default=None, metadata={'path_param': { 'field_name': 'imageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImageSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteImageSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteImageSecurity:
    option1: Optional[DeleteImageSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteImageSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteImageRequest:
    path_params: DeleteImagePathParams = field(default=None)
    security: DeleteImageSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteImageDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteImageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_image_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_image_default_application_json_object: Optional[DeleteImageDefaultApplicationJSON] = field(default=None)
    
