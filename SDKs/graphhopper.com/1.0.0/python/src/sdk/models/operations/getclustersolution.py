from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetClusterSolutionPathParams:
    job_id: str = field(default=None, metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetClusterSolutionRequest:
    path_params: GetClusterSolutionPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetClusterSolution404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetClusterSolutionResponse:
    bad_request: Optional[shared.BadRequest] = field(default=None)
    cluster_response: Optional[shared.ClusterResponse] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_cluster_solution_404_application_json_object: Optional[GetClusterSolution404ApplicationJSON] = field(default=None)
    
