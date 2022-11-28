from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDImageInt16PathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDImageInt16QueryParams:
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDImageInt16Headers:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDImageInt16Request:
    headers: GetInstancesIDImageInt16Headers = field()
    path_params: GetInstancesIDImageInt16PathParams = field()
    query_params: GetInstancesIDImageInt16QueryParams = field()
    

@dataclass
class GetInstancesIDImageInt16Response:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
