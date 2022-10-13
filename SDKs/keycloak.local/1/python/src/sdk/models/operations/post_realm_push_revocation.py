from dataclasses import dataclass, field



@dataclass
class PostRealmPushRevocationPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmPushRevocationRequest:
    path_params: PostRealmPushRevocationPathParams = field(default=None)
    

@dataclass
class PostRealmPushRevocationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
