from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmIdentityProviderInstancesAliasMappersIDPathParams:
    alias: str = field(default=None, metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmIdentityProviderInstancesAliasMappersIDRequest:
    path_params: PutRealmIdentityProviderInstancesAliasMappersIDPathParams = field(default=None)
    request: shared.IdentityProviderMapperRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmIdentityProviderInstancesAliasMappersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
