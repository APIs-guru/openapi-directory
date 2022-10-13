from dataclasses import dataclass, field



@dataclass
class GetRelationByEfoidPathParams:
    disease: str = field(default=None, metadata={'path_param': { 'field_name': 'disease', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRelationByEfoidRequest:
    path_params: GetRelationByEfoidPathParams = field(default=None)
    

@dataclass
class GetRelationByEfoidResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
