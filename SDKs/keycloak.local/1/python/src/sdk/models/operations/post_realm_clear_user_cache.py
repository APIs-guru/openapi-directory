from dataclasses import dataclass, field



@dataclass
class PostRealmClearUserCachePathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClearUserCacheRequest:
    path_params: PostRealmClearUserCachePathParams = field(default=None)
    

@dataclass
class PostRealmClearUserCacheResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
