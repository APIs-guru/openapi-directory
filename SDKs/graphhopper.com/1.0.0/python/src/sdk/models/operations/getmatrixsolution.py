from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMatrixSolutionPathParams:
    job_id: str = field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatrixSolutionRequest:
    path_params: GetMatrixSolutionPathParams = field()
    

@dataclass
class GetMatrixSolutionResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    gh_error: Optional[shared.GhError] = field(default=None)
    matrix_response: Optional[shared.MatrixResponse] = field(default=None)
    
