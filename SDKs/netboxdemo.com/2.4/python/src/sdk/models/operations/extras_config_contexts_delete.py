from dataclasses import dataclass, field



@dataclass
class ExtrasConfigContextsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasConfigContextsDeleteRequest:
    path_params: ExtrasConfigContextsDeletePathParams = field(default=None)
    

@dataclass
class ExtrasConfigContextsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
