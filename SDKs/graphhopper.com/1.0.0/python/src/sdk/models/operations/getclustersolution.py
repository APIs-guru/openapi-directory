from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetClusterSolutionPathParams:
    job_id: str = field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetClusterSolution404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetClusterSolutionRequest:
    path_params: GetClusterSolutionPathParams = field()
    

@dataclass
class GetClusterSolutionResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    cluster_response: Optional[shared.ClusterResponse] = field(default=None)
    get_cluster_solution_404_application_json_object: Optional[GetClusterSolution404ApplicationJSON] = field(default=None)
    
