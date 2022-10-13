from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmAuthenticationConfigDescriptionProviderIDPathParams:
    provider_id: str = field(default=None, metadata={'path_param': { 'field_name': 'providerId', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationConfigDescriptionProviderIDRequest:
    path_params: GetRealmAuthenticationConfigDescriptionProviderIDPathParams = field(default=None)
    

@dataclass
class GetRealmAuthenticationConfigDescriptionProviderIDResponse:
    authenticator_config_info_representation: Optional[shared.AuthenticatorConfigInfoRepresentation] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
