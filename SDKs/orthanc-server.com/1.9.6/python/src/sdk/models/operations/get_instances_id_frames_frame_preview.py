from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDFramesFramePreviewPathParams:
    frame: float = field(default=None, metadata={'path_param': { 'field_name': 'frame', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFramePreviewQueryParams:
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDFramesFramePreviewHeaders:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class GetInstancesIDFramesFramePreviewRequest:
    path_params: GetInstancesIDFramesFramePreviewPathParams = field(default=None)
    query_params: GetInstancesIDFramesFramePreviewQueryParams = field(default=None)
    headers: GetInstancesIDFramesFramePreviewHeaders = field(default=None)
    

@dataclass
class GetInstancesIDFramesFramePreviewResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
