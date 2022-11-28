from dataclasses import dataclass, field



@dataclass
class LearnablePathParams:
    learnable: bool = field(metadata={'path_param': { 'field_name': 'learnable', 'style': 'simple', 'explode': False }})
    source: str = field(metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    

@dataclass
class LearnableRequest:
    path_params: LearnablePathParams = field()
    

@dataclass
class LearnableResponse:
    content_type: str = field()
    status_code: int = field()
    
