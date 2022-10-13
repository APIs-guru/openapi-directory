from dataclasses import dataclass, field



@dataclass
class TenancyChoicesReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TenancyChoicesReadRequest:
    path_params: TenancyChoicesReadPathParams = field(default=None)
    

@dataclass
class TenancyChoicesReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
