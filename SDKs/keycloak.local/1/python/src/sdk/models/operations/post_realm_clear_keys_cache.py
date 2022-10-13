from dataclasses import dataclass, field



@dataclass
class PostRealmClearKeysCachePathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClearKeysCacheRequest:
    path_params: PostRealmClearKeysCachePathParams = field(default=None)
    

@dataclass
class PostRealmClearKeysCacheResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
