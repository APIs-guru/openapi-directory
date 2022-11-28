from dataclasses import dataclass, field



@dataclass
class GetCacheValuePathParams:
    value: int = field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCacheValueRequest:
    path_params: GetCacheValuePathParams = field()
    

@dataclass
class GetCacheValueResponse:
    content_type: str = field()
    status_code: int = field()
    
