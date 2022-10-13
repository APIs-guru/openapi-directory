from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmIdentityProviderInstancesAliasPathParams:
    alias: str = field(default=None, metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmIdentityProviderInstancesAliasRequest:
    path_params: GetRealmIdentityProviderInstancesAliasPathParams = field(default=None)
    

@dataclass
class GetRealmIdentityProviderInstancesAliasResponse:
    content_type: str = field(default=None)
    identity_provider_representation: Optional[shared.IdentityProviderRepresentation] = field(default=None)
    status_code: int = field(default=None)
    
