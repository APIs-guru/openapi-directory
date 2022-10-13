from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDFramesFrameImageUint16PathParams:
    frame: float = field(default=None, metadata={'path_param': { 'field_name': 'frame', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameImageUint16QueryParams:
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDFramesFrameImageUint16Headers:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class GetInstancesIDFramesFrameImageUint16Request:
    path_params: GetInstancesIDFramesFrameImageUint16PathParams = field(default=None)
    query_params: GetInstancesIDFramesFrameImageUint16QueryParams = field(default=None)
    headers: GetInstancesIDFramesFrameImageUint16Headers = field(default=None)
    

@dataclass
class GetInstancesIDFramesFrameImageUint16Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
