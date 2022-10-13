from dataclasses import dataclass, field



@dataclass
class IpamChoicesReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamChoicesReadRequest:
    path_params: IpamChoicesReadPathParams = field(default=None)
    

@dataclass
class IpamChoicesReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
