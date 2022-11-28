from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDFramesFrameRawPathParams:
    frame: float = field(metadata={'path_param': { 'field_name': 'frame', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameRawRequest:
    path_params: GetInstancesIDFramesFrameRawPathParams = field()
    

@dataclass
class GetInstancesIDFramesFrameRawResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
