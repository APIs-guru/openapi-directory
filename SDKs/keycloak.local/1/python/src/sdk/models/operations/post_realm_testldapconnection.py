from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmTestLdapConnectionPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmTestLdapConnectionRequest:
    path_params: PostRealmTestLdapConnectionPathParams = field(default=None)
    request: shared.TestLdapConnectionRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmTestLdapConnectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
