from dataclasses import dataclass, field



@dataclass
class LearnablePathParams:
    learnable: bool = field(default=None, metadata={'path_param': { 'field_name': 'learnable', 'style': 'simple', 'explode': False }})
    source: str = field(default=None, metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    

@dataclass
class LearnableRequest:
    path_params: LearnablePathParams = field(default=None)
    

@dataclass
class LearnableResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
