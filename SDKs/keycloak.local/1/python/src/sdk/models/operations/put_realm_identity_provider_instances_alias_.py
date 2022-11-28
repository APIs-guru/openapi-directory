from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmIdentityProviderInstancesAliasPathParams:
    alias: str = field(metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmIdentityProviderInstancesAliasRequest:
    path_params: PutRealmIdentityProviderInstancesAliasPathParams = field()
    request: shared.IdentityProviderRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmIdentityProviderInstancesAliasResponse:
    content_type: str = field()
    status_code: int = field()
    
