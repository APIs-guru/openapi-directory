from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutCoursesContentIDMetadataTagsPathParams:
    content_id: str = field(metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutCoursesContentIDMetadataTagsRequestBody:
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class PutCoursesContentIDMetadataTagsRequest:
    path_params: PutCoursesContentIDMetadataTagsPathParams = field()
    request: PutCoursesContentIDMetadataTagsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCoursesContentIDMetadataTagsResponse:
    content_type: str = field()
    status_code: int = field()
    course_meta_response: Optional[shared.CourseMetaResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
