from dataclasses import dataclass, field



@dataclass
class AnonymizePathParams:
    anonymized: bool = field(default=None, metadata={'path_param': { 'field_name': 'anonymized', 'style': 'simple', 'explode': False }})
    source: str = field(default=None, metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    

@dataclass
class AnonymizeRequest:
    path_params: AnonymizePathParams = field(default=None)
    

@dataclass
class AnonymizeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
