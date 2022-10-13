from dataclasses import dataclass, field



@dataclass
class ExtrasReportsRunPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasReportsRunRequest:
    path_params: ExtrasReportsRunPathParams = field(default=None)
    

@dataclass
class ExtrasReportsRunResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
