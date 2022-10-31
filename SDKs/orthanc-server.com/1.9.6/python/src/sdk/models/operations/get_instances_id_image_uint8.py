from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDImageUint8PathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDImageUint8QueryParams:
    quality: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDImageUint8Headers:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDImageUint8Request:
    path_params: GetInstancesIDImageUint8PathParams = field(default=None)
    query_params: GetInstancesIDImageUint8QueryParams = field(default=None)
    headers: GetInstancesIDImageUint8Headers = field(default=None)
    

@dataclass
class GetInstancesIDImageUint8Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
