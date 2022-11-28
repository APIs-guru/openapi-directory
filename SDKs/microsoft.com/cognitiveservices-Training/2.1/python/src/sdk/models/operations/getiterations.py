from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetIterationsPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIterationsHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIterationsRequest:
    headers: GetIterationsHeaders = field()
    path_params: GetIterationsPathParams = field()
    

@dataclass
class GetIterationsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    iterations: Optional[List[shared.Iteration]] = field(default=None)
    
