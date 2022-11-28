from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateImagePathParams:
    image_id: str = field(metadata={'path_param': { 'field_name': 'imageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateImageSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateImageDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateImageRequest:
    path_params: UpdateImagePathParams = field()
    request: shared.ImagePrivateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateImageSecurity = field()
    

@dataclass
class UpdateImageResponse:
    content_type: str = field()
    status_code: int = field()
    image_private: Optional[shared.ImagePrivate] = field(default=None)
    update_image_default_application_json_object: Optional[UpdateImageDefaultApplicationJSON] = field(default=None)
    
