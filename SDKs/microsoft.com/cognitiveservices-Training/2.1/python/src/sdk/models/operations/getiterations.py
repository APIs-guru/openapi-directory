from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetIterationsPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIterationsHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIterationsRequest:
    path_params: GetIterationsPathParams = field(default=None)
    headers: GetIterationsHeaders = field(default=None)
    

@dataclass
class GetIterationsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    iterations: Optional[List[shared.Iteration]] = field(default=None)
    status_code: int = field(default=None)
    
