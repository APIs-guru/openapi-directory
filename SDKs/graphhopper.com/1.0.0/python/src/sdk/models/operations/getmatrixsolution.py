from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMatrixSolutionPathParams:
    job_id: str = field(default=None, metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatrixSolutionRequest:
    path_params: GetMatrixSolutionPathParams = field(default=None)
    

@dataclass
class GetMatrixSolutionResponse:
    content_type: str = field(default=None)
    gh_error: Optional[shared.GhError] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    matrix_response: Optional[shared.MatrixResponse] = field(default=None)
    status_code: int = field(default=None)
    
