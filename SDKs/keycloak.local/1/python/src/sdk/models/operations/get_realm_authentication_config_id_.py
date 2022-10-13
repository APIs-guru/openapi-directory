from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmAuthenticationConfigIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationConfigIDRequest:
    path_params: GetRealmAuthenticationConfigIDPathParams = field(default=None)
    

@dataclass
class GetRealmAuthenticationConfigIDResponse:
    authenticator_config_representation: Optional[shared.AuthenticatorConfigRepresentation] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
