from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmIdentityProviderInstancesAliasMappersIDPathParams:
    alias: str = field(metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmIdentityProviderInstancesAliasMappersIDRequest:
    path_params: PutRealmIdentityProviderInstancesAliasMappersIDPathParams = field()
    request: shared.IdentityProviderMapperRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmIdentityProviderInstancesAliasMappersIDResponse:
    content_type: str = field()
    status_code: int = field()
    
