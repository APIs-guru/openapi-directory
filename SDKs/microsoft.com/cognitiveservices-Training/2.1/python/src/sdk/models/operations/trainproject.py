from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TrainProjectPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TrainProjectHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class TrainProjectRequest:
    path_params: TrainProjectPathParams = field(default=None)
    headers: TrainProjectHeaders = field(default=None)
    

@dataclass
class TrainProjectResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    iteration: Optional[shared.Iteration] = field(default=None)
    status_code: int = field(default=None)
    
