from dataclasses import dataclass, field



@dataclass
class AnonymizePathParams:
    anonymized: bool = field(metadata={'path_param': { 'field_name': 'anonymized', 'style': 'simple', 'explode': False }})
    source: str = field(metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    

@dataclass
class AnonymizeRequest:
    path_params: AnonymizePathParams = field()
    

@dataclass
class AnonymizeResponse:
    content_type: str = field()
    status_code: int = field()
    
