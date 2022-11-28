from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetImagePathParams:
    image_id: str = field(metadata={'path_param': { 'field_name': 'imageId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetImageDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetImageRequest:
    path_params: GetImagePathParams = field()
    

@dataclass
class GetImageResponse:
    content_type: str = field()
    status_code: int = field()
    image_private: Optional[shared.ImagePrivate] = field(default=None)
    get_image_default_application_json_object: Optional[GetImageDefaultApplicationJSON] = field(default=None)
    
