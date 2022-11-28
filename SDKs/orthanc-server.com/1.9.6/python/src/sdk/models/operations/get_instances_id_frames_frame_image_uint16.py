from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDFramesFrameImageUint16PathParams:
    frame: float = field(metadata={'path_param': { 'field_name': 'frame', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameImageUint16QueryParams:
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDFramesFrameImageUint16Headers:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameImageUint16Request:
    headers: GetInstancesIDFramesFrameImageUint16Headers = field()
    path_params: GetInstancesIDFramesFrameImageUint16PathParams = field()
    query_params: GetInstancesIDFramesFrameImageUint16QueryParams = field()
    

@dataclass
class GetInstancesIDFramesFrameImageUint16Response:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
