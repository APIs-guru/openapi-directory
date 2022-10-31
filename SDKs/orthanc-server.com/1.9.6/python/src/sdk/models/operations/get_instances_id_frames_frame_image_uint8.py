from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDFramesFrameImageUint8PathParams:
    frame: float = field(default=None, metadata={'path_param': { 'field_name': 'frame', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameImageUint8QueryParams:
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDFramesFrameImageUint8Headers:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameImageUint8Request:
    path_params: GetInstancesIDFramesFrameImageUint8PathParams = field(default=None)
    query_params: GetInstancesIDFramesFrameImageUint8QueryParams = field(default=None)
    headers: GetInstancesIDFramesFrameImageUint8Headers = field(default=None)
    

@dataclass
class GetInstancesIDFramesFrameImageUint8Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
