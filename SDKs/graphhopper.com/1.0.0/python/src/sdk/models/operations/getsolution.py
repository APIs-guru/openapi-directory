from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSolutionPathParams:
    job_id: str = field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetSolution404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetSolutionRequest:
    path_params: GetSolutionPathParams = field()
    

@dataclass
class GetSolutionResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    response: Optional[shared.Response] = field(default=None)
    get_solution_404_application_json_object: Optional[GetSolution404ApplicationJSON] = field(default=None)
    
