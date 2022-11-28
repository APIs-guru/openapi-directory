from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDPreviewPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDPreviewQueryParams:
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDPreviewHeaders:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDPreviewRequest:
    headers: GetInstancesIDPreviewHeaders = field()
    path_params: GetInstancesIDPreviewPathParams = field()
    query_params: GetInstancesIDPreviewQueryParams = field()
    

@dataclass
class GetInstancesIDPreviewResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
