from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDFramesFrameMatlabPathParams:
    frame: float = field(metadata={'path_param': { 'field_name': 'frame', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameMatlabRequest:
    path_params: GetInstancesIDFramesFrameMatlabPathParams = field()
    

@dataclass
class GetInstancesIDFramesFrameMatlabResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
