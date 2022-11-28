from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDFramesFrameRawGzPathParams:
    frame: float = field(metadata={'path_param': { 'field_name': 'frame', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameRawGzRequest:
    path_params: GetInstancesIDFramesFrameRawGzPathParams = field()
    

@dataclass
class GetInstancesIDFramesFrameRawGzResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
