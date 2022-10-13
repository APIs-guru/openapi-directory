from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDPreviewPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDPreviewQueryParams:
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDPreviewHeaders:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class GetInstancesIDPreviewRequest:
    path_params: GetInstancesIDPreviewPathParams = field(default=None)
    query_params: GetInstancesIDPreviewQueryParams = field(default=None)
    headers: GetInstancesIDPreviewHeaders = field(default=None)
    

@dataclass
class GetInstancesIDPreviewResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
