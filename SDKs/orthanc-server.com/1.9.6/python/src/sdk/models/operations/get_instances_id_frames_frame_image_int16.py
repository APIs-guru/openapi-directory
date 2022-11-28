from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDFramesFrameImageInt16PathParams:
    frame: float = field(metadata={'path_param': { 'field_name': 'frame', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameImageInt16QueryParams:
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDFramesFrameImageInt16Headers:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameImageInt16Request:
    headers: GetInstancesIDFramesFrameImageInt16Headers = field()
    path_params: GetInstancesIDFramesFrameImageInt16PathParams = field()
    query_params: GetInstancesIDFramesFrameImageInt16QueryParams = field()
    

@dataclass
class GetInstancesIDFramesFrameImageInt16Response:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
