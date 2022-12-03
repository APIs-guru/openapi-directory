from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSubmissionsSubmissionIDPathParams:
    submission_id: str = field(metadata={'path_param': { 'field_name': 'submission_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetSubmissionsSubmissionID200ApplicationJSON:
    submission: Optional[shared.SubmissionV1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submission') }})
    

@dataclass
class GetSubmissionsSubmissionIDRequest:
    path_params: GetSubmissionsSubmissionIDPathParams = field()
    

@dataclass
class GetSubmissionsSubmissionIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_submissions_submission_id_200_application_json_object: Optional[GetSubmissionsSubmissionID200ApplicationJSON] = field(default=None)
    
