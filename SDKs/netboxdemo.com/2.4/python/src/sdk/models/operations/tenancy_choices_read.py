from dataclasses import dataclass, field



@dataclass
class TenancyChoicesReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TenancyChoicesReadRequest:
    path_params: TenancyChoicesReadPathParams = field()
    

@dataclass
class TenancyChoicesReadResponse:
    content_type: str = field()
    status_code: int = field()
    
