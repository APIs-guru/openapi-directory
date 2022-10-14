from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    baudrate: int = field(default=None, metadata={'path_param': { 'field_name': 'baudrate', 'style': 'simple', 'explode': False }})
    device: str = field(default=None, metadata={'path_param': { 'field_name': 'device', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRequest:
    path_params: GetPathParams = field(default=None)
    

@dataclass
class GetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    mbus_data: Optional[str] = field(default=None)
    text_error: Optional[str] = field(default=None)
    
