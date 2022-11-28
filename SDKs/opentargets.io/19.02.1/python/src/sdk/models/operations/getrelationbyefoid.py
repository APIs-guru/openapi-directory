from dataclasses import dataclass, field



@dataclass
class GetRelationByEfoidPathParams:
    disease: str = field(metadata={'path_param': { 'field_name': 'disease', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRelationByEfoidRequest:
    path_params: GetRelationByEfoidPathParams = field()
    

@dataclass
class GetRelationByEfoidResponse:
    content_type: str = field()
    status_code: int = field()
    
