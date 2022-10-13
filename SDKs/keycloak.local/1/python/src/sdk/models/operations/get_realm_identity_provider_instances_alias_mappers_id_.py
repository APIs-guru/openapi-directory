from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmIdentityProviderInstancesAliasMappersIDPathParams:
    alias: str = field(default=None, metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmIdentityProviderInstancesAliasMappersIDRequest:
    path_params: GetRealmIdentityProviderInstancesAliasMappersIDPathParams = field(default=None)
    

@dataclass
class GetRealmIdentityProviderInstancesAliasMappersIDResponse:
    content_type: str = field(default=None)
    identity_provider_mapper_representation: Optional[shared.IdentityProviderMapperRepresentation] = field(default=None)
    status_code: int = field(default=None)
    
