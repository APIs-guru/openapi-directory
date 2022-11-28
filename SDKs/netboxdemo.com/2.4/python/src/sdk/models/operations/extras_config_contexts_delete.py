from dataclasses import dataclass, field



@dataclass
class ExtrasConfigContextsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasConfigContextsDeleteRequest:
    path_params: ExtrasConfigContextsDeletePathParams = field()
    

@dataclass
class ExtrasConfigContextsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
