from dataclasses import dataclass, field



@dataclass
class GetCacheValuePathParams:
    value: int = field(default=None, metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCacheValueRequest:
    path_params: GetCacheValuePathParams = field(default=None)
    

@dataclass
class GetCacheValueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
