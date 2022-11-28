from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDImageUint8PathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDImageUint8QueryParams:
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDImageUint8Headers:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDImageUint8Request:
    headers: GetInstancesIDImageUint8Headers = field()
    path_params: GetInstancesIDImageUint8PathParams = field()
    query_params: GetInstancesIDImageUint8QueryParams = field()
    

@dataclass
class GetInstancesIDImageUint8Response:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
