from dataclasses import dataclass, field



@dataclass
class VirtualizationChoicesReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationChoicesReadRequest:
    path_params: VirtualizationChoicesReadPathParams = field()
    

@dataclass
class VirtualizationChoicesReadResponse:
    content_type: str = field()
    status_code: int = field()
    
