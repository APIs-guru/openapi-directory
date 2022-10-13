from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDImageUint16PathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDImageUint16QueryParams:
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDImageUint16Headers:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class GetInstancesIDImageUint16Request:
    path_params: GetInstancesIDImageUint16PathParams = field(default=None)
    query_params: GetInstancesIDImageUint16QueryParams = field(default=None)
    headers: GetInstancesIDImageUint16Headers = field(default=None)
    

@dataclass
class GetInstancesIDImageUint16Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
