from dataclasses import dataclass, field



@dataclass
class ExtrasReportsRunPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasReportsRunRequest:
    path_params: ExtrasReportsRunPathParams = field()
    

@dataclass
class ExtrasReportsRunResponse:
    content_type: str = field()
    status_code: int = field()
    
