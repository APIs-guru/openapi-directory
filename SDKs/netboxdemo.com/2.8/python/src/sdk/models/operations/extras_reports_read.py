from dataclasses import dataclass, field



@dataclass
class ExtrasReportsReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasReportsReadRequest:
    path_params: ExtrasReportsReadPathParams = field(default=None)
    

@dataclass
class ExtrasReportsReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
