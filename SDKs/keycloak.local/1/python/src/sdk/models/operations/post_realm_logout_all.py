from dataclasses import dataclass, field



@dataclass
class PostRealmLogoutAllPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmLogoutAllRequest:
    path_params: PostRealmLogoutAllPathParams = field()
    

@dataclass
class PostRealmLogoutAllResponse:
    content_type: str = field()
    status_code: int = field()
    
