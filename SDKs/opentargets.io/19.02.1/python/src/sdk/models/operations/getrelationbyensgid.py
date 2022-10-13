from dataclasses import dataclass, field



@dataclass
class GetRelationByEnsgidPathParams:
    target: str = field(default=None, metadata={'path_param': { 'field_name': 'target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRelationByEnsgidRequest:
    path_params: GetRelationByEnsgidPathParams = field(default=None)
    

@dataclass
class GetRelationByEnsgidResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
