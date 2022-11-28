from dataclasses import dataclass, field



@dataclass
class PostRealmClearKeysCachePathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClearKeysCacheRequest:
    path_params: PostRealmClearKeysCachePathParams = field()
    

@dataclass
class PostRealmClearKeysCacheResponse:
    content_type: str = field()
    status_code: int = field()
    
