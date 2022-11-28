from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDFramesFrameRenderedPathParams:
    frame: float = field(metadata={'path_param': { 'field_name': 'frame', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameRenderedQueryParams:
    height: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    smooth: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'smooth', 'style': 'form', 'explode': True }})
    width: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    window_center: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'window-center', 'style': 'form', 'explode': True }})
    window_width: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'window-width', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDFramesFrameRenderedHeaders:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDFramesFrameRenderedRequest:
    headers: GetInstancesIDFramesFrameRenderedHeaders = field()
    path_params: GetInstancesIDFramesFrameRenderedPathParams = field()
    query_params: GetInstancesIDFramesFrameRenderedQueryParams = field()
    

@dataclass
class GetInstancesIDFramesFrameRenderedResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
