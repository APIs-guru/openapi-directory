from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteImagePathParams:
    image_id: str = field(metadata={'path_param': { 'field_name': 'imageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImageSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteImageDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteImageRequest:
    path_params: DeleteImagePathParams = field()
    security: DeleteImageSecurity = field()
    

@dataclass
class DeleteImageResponse:
    content_type: str = field()
    status_code: int = field()
    delete_image_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_image_default_application_json_object: Optional[DeleteImageDefaultApplicationJSON] = field(default=None)
    
