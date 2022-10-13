from dataclasses import dataclass, field



@dataclass
class ExtrasTagsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasTagsDeleteRequest:
    path_params: ExtrasTagsDeletePathParams = field(default=None)
    

@dataclass
class ExtrasTagsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
