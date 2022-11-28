from dataclasses import dataclass, field



@dataclass
class IpamChoicesReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamChoicesReadRequest:
    path_params: IpamChoicesReadPathParams = field()
    

@dataclass
class IpamChoicesReadResponse:
    content_type: str = field()
    status_code: int = field()
    
