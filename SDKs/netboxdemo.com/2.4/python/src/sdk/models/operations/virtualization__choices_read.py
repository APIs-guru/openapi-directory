from dataclasses import dataclass, field



@dataclass
class VirtualizationChoicesReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationChoicesReadRequest:
    path_params: VirtualizationChoicesReadPathParams = field(default=None)
    

@dataclass
class VirtualizationChoicesReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
