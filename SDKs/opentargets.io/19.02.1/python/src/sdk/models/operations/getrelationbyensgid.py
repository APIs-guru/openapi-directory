from dataclasses import dataclass, field



@dataclass
class GetRelationByEnsgidPathParams:
    target: str = field(metadata={'path_param': { 'field_name': 'target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRelationByEnsgidRequest:
    path_params: GetRelationByEnsgidPathParams = field()
    

@dataclass
class GetRelationByEnsgidResponse:
    content_type: str = field()
    status_code: int = field()
    
