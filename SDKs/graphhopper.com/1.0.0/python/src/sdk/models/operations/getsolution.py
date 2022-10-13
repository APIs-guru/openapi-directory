from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetSolutionPathParams:
    job_id: str = field(default=None, metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSolutionRequest:
    path_params: GetSolutionPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetSolution404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetSolutionResponse:
    bad_request: Optional[shared.BadRequest] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    response: Optional[shared.Response] = field(default=None)
    status_code: int = field(default=None)
    get_solution_404_application_json_object: Optional[GetSolution404ApplicationJSON] = field(default=None)
    
