from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutCoursesContentIDMetadataCategoryPathParams:
    content_id: str = field(default=None, metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutCoursesContentIDMetadataCategoryRequestBody:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    

@dataclass
class PutCoursesContentIDMetadataCategoryRequest:
    path_params: PutCoursesContentIDMetadataCategoryPathParams = field(default=None)
    request: PutCoursesContentIDMetadataCategoryRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCoursesContentIDMetadataCategoryResponse:
    content_type: str = field(default=None)
    course_meta_response: Optional[shared.CourseMetaResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
