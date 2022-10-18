from dataclasses import dataclass, field



@dataclass
class ScanPathParams:
    baudrate: int = field(default=None, metadata={'path_param': { 'field_name': 'baudrate', 'style': 'simple', 'explode': False }})
    device: str = field(default=None, metadata={'path_param': { 'field_name': 'device', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScanRequest:
    path_params: ScanPathParams = field(default=None)
    

@dataclass
class ScanResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
