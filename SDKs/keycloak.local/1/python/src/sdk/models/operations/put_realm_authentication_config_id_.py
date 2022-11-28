from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmAuthenticationConfigIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmAuthenticationConfigIDRequest:
    path_params: PutRealmAuthenticationConfigIDPathParams = field()
    request: shared.AuthenticatorConfigRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmAuthenticationConfigIDResponse:
    content_type: str = field()
    status_code: int = field()
    
