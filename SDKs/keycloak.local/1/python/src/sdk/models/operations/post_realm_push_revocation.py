from dataclasses import dataclass, field



@dataclass
class PostRealmPushRevocationPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmPushRevocationRequest:
    path_params: PostRealmPushRevocationPathParams = field()
    

@dataclass
class PostRealmPushRevocationResponse:
    content_type: str = field()
    status_code: int = field()
    
