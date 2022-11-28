from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDImageUint16PathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDImageUint16QueryParams:
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDImageUint16Headers:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDImageUint16Request:
    headers: GetInstancesIDImageUint16Headers = field()
    path_params: GetInstancesIDImageUint16PathParams = field()
    query_params: GetInstancesIDImageUint16QueryParams = field()
    

@dataclass
class GetInstancesIDImageUint16Response:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
