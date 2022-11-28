from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMultiPathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    baudrate: int = field(metadata={'path_param': { 'field_name': 'baudrate', 'style': 'simple', 'explode': False }})
    device: str = field(metadata={'path_param': { 'field_name': 'device', 'style': 'simple', 'explode': False }})
    maxframes: int = field(metadata={'path_param': { 'field_name': 'maxframes', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMultiRequest:
    path_params: GetMultiPathParams = field()
    

@dataclass
class GetMultiResponse:
    content_type: str = field()
    status_code: int = field()
    mbus_data: Optional[str] = field(default=None)
    text_error: Optional[str] = field(default=None)
    
