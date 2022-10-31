from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDImageInt16PathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDImageInt16QueryParams:
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDImageInt16Headers:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDImageInt16Request:
    path_params: GetInstancesIDImageInt16PathParams = field(default=None)
    query_params: GetInstancesIDImageInt16QueryParams = field(default=None)
    headers: GetInstancesIDImageInt16Headers = field(default=None)
    

@dataclass
class GetInstancesIDImageInt16Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
