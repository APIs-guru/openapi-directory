from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PostSubmissionsRequestBody:
    application: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    producer_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('producer_id') }})
    

@dataclass_json
@dataclass
class PostSubmissions200ApplicationJSON:
    submission: Optional[shared.SubmissionV1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submission') }})
    

@dataclass_json
@dataclass
class PostSubmissions400ApplicationJSON:
    errors: Optional[list[shared.ErrorV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class PostSubmissionsRequest:
    request: Optional[PostSubmissionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSubmissionsResponse:
    content_type: str = field()
    status_code: int = field()
    post_submissions_200_application_json_object: Optional[PostSubmissions200ApplicationJSON] = field(default=None)
    post_submissions_400_application_json_object: Optional[PostSubmissions400ApplicationJSON] = field(default=None)
    
