from dataclasses import dataclass, field



@dataclass
class PostRealmLogoutAllPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmLogoutAllRequest:
    path_params: PostRealmLogoutAllPathParams = field(default=None)
    

@dataclass
class PostRealmLogoutAllResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
