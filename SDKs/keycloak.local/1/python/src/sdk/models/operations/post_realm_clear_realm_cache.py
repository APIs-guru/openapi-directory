from dataclasses import dataclass, field



@dataclass
class PostRealmClearRealmCachePathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClearRealmCacheRequest:
    path_params: PostRealmClearRealmCachePathParams = field()
    

@dataclass
class PostRealmClearRealmCacheResponse:
    content_type: str = field()
    status_code: int = field()
    
