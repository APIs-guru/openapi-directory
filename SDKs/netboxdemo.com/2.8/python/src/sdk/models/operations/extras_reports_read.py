from dataclasses import dataclass, field



@dataclass
class ExtrasReportsReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasReportsReadRequest:
    path_params: ExtrasReportsReadPathParams = field()
    

@dataclass
class ExtrasReportsReadResponse:
    content_type: str = field()
    status_code: int = field()
    
