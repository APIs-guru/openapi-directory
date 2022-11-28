from dataclasses import dataclass, field



@dataclass
class ExtrasScriptsReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasScriptsReadRequest:
    path_params: ExtrasScriptsReadPathParams = field()
    

@dataclass
class ExtrasScriptsReadResponse:
    content_type: str = field()
    status_code: int = field()
    
