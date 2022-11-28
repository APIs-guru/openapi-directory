from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TrainProjectPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TrainProjectHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class TrainProjectRequest:
    headers: TrainProjectHeaders = field()
    path_params: TrainProjectPathParams = field()
    

@dataclass
class TrainProjectResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    iteration: Optional[shared.Iteration] = field(default=None)
    
