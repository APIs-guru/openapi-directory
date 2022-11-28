from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDRenderedPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDRenderedQueryParams:
    height: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    smooth: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'smooth', 'style': 'form', 'explode': True }})
    width: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    window_center: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'window-center', 'style': 'form', 'explode': True }})
    window_width: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'window-width', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDRenderedHeaders:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDRenderedRequest:
    headers: GetInstancesIDRenderedHeaders = field()
    path_params: GetInstancesIDRenderedPathParams = field()
    query_params: GetInstancesIDRenderedQueryParams = field()
    

@dataclass
class GetInstancesIDRenderedResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
