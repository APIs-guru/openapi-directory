from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetIterationPathParams:
    iteration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIterationHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIterationRequest:
    path_params: GetIterationPathParams = field(default=None)
    headers: GetIterationHeaders = field(default=None)
    

@dataclass
class GetIterationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    iteration: Optional[shared.Iteration] = field(default=None)
    status_code: int = field(default=None)
    
