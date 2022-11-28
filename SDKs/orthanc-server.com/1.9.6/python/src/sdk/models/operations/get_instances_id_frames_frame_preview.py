from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDFramesFramePreviewPathParams:
    frame: float = field(metadata={'path_param': { 'field_name': 'frame', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFramePreviewQueryParams:
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDFramesFramePreviewHeaders:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFramePreviewRequest:
    headers: GetInstancesIDFramesFramePreviewHeaders = field()
    path_params: GetInstancesIDFramesFramePreviewPathParams = field()
    query_params: GetInstancesIDFramesFramePreviewQueryParams = field()
    

@dataclass
class GetInstancesIDFramesFramePreviewResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
