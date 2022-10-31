from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDFramesFrameImageInt16PathParams:
    frame: float = field(default=None, metadata={'path_param': { 'field_name': 'frame', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameImageInt16QueryParams:
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDFramesFrameImageInt16Headers:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameImageInt16Request:
    path_params: GetInstancesIDFramesFrameImageInt16PathParams = field(default=None)
    query_params: GetInstancesIDFramesFrameImageInt16QueryParams = field(default=None)
    headers: GetInstancesIDFramesFrameImageInt16Headers = field(default=None)
    

@dataclass
class GetInstancesIDFramesFrameImageInt16Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
