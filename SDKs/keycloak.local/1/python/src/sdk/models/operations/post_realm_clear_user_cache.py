from dataclasses import dataclass, field



@dataclass
class PostRealmClearUserCachePathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClearUserCacheRequest:
    path_params: PostRealmClearUserCachePathParams = field()
    

@dataclass
class PostRealmClearUserCacheResponse:
    content_type: str = field()
    status_code: int = field()
    
