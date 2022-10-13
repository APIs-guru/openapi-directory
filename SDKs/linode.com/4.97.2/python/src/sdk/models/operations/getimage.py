from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetImagePathParams:
    image_id: str = field(default=None, metadata={'path_param': { 'field_name': 'imageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImageRequest:
    path_params: GetImagePathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetImageDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetImageResponse:
    content_type: str = field(default=None)
    image_private: Optional[shared.ImagePrivate] = field(default=None)
    status_code: int = field(default=None)
    get_image_default_application_json_object: Optional[GetImageDefaultApplicationJSON] = field(default=None)
    
