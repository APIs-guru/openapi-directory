from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutCoursesContentIDMetadataTopicPathParams:
    content_id: str = field(metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutCoursesContentIDMetadataTopicRequestBody:
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    

@dataclass
class PutCoursesContentIDMetadataTopicRequest:
    path_params: PutCoursesContentIDMetadataTopicPathParams = field()
    request: PutCoursesContentIDMetadataTopicRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCoursesContentIDMetadataTopicResponse:
    content_type: str = field()
    status_code: int = field()
    course_meta_response: Optional[shared.CourseMetaResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
