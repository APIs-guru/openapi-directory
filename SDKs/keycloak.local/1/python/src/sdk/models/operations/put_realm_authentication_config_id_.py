from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmAuthenticationConfigIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmAuthenticationConfigIDRequest:
    path_params: PutRealmAuthenticationConfigIDPathParams = field(default=None)
    request: shared.AuthenticatorConfigRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmAuthenticationConfigIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
