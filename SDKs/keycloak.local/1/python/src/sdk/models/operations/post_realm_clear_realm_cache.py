from dataclasses import dataclass, field



@dataclass
class PostRealmClearRealmCachePathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClearRealmCacheRequest:
    path_params: PostRealmClearRealmCachePathParams = field(default=None)
    

@dataclass
class PostRealmClearRealmCacheResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
