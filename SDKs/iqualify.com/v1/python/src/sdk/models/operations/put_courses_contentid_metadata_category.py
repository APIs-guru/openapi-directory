from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutCoursesContentIDMetadataCategoryPathParams:
    content_id: str = field(metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutCoursesContentIDMetadataCategoryRequestBody:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    

@dataclass
class PutCoursesContentIDMetadataCategoryRequest:
    path_params: PutCoursesContentIDMetadataCategoryPathParams = field()
    request: PutCoursesContentIDMetadataCategoryRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCoursesContentIDMetadataCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    course_meta_response: Optional[shared.CourseMetaResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
