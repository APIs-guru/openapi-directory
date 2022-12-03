from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PostApplications200ApplicationJSON:
    application: Optional[shared.ApplicationReadV1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    

@dataclass
class PostApplicationsRequest:
    request: Optional[shared.ApplicationWriteV1] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostApplicationsResponse:
    content_type: str = field()
    status_code: int = field()
    post_applications_200_application_json_object: Optional[PostApplications200ApplicationJSON] = field(default=None)
    
