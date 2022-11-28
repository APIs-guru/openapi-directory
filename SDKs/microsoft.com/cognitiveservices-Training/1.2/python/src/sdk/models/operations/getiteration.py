from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetIterationPathParams:
    iteration_id: str = field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIterationHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIterationRequest:
    headers: GetIterationHeaders = field()
    path_params: GetIterationPathParams = field()
    

@dataclass
class GetIterationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    iteration: Optional[shared.Iteration] = field(default=None)
    
