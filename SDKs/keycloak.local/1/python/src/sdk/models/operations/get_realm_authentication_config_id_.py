from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmAuthenticationConfigIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationConfigIDRequest:
    path_params: GetRealmAuthenticationConfigIDPathParams = field()
    

@dataclass
class GetRealmAuthenticationConfigIDResponse:
    content_type: str = field()
    status_code: int = field()
    authenticator_config_representation: Optional[shared.AuthenticatorConfigRepresentation] = field(default=None)
    
