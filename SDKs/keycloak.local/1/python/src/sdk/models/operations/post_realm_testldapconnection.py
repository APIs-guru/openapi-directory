from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmTestLdapConnectionPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmTestLdapConnectionRequest:
    path_params: PostRealmTestLdapConnectionPathParams = field()
    request: shared.TestLdapConnectionRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmTestLdapConnectionResponse:
    content_type: str = field()
    status_code: int = field()
    
