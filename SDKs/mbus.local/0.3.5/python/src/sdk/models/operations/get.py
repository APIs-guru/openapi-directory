from dataclasses import dataclass, field



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
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
