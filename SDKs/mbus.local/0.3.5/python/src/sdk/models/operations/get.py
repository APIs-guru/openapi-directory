from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    baudrate: int = field(metadata={'path_param': { 'field_name': 'baudrate', 'style': 'simple', 'explode': False }})
    device: str = field(metadata={'path_param': { 'field_name': 'device', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRequest:
    path_params: GetPathParams = field()
    

@dataclass
class GetResponse:
    content_type: str = field()
    status_code: int = field()
    mbus_data: Optional[str] = field(default=None)
    text_error: Optional[str] = field(default=None)
    
