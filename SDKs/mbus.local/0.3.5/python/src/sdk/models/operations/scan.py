from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ScanPathParams:
    baudrate: int = field(metadata={'path_param': { 'field_name': 'baudrate', 'style': 'simple', 'explode': False }})
    device: str = field(metadata={'path_param': { 'field_name': 'device', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScanRequest:
    path_params: ScanPathParams = field()
    

@dataclass
class ScanResponse:
    content_type: str = field()
    status_code: int = field()
    slaves: Optional[str] = field(default=None)
    text_error: Optional[str] = field(default=None)
    
