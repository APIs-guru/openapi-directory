from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmIdentityProviderInstancesAliasPathParams:
    alias: str = field(metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmIdentityProviderInstancesAliasRequest:
    path_params: GetRealmIdentityProviderInstancesAliasPathParams = field()
    

@dataclass
class GetRealmIdentityProviderInstancesAliasResponse:
    content_type: str = field()
    status_code: int = field()
    identity_provider_representation: Optional[shared.IdentityProviderRepresentation] = field(default=None)
    
