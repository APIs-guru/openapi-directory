from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmIdentityProviderInstancesAliasMappersPathParams:
    alias: str = field(metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmIdentityProviderInstancesAliasMappersRequest:
    path_params: GetRealmIdentityProviderInstancesAliasMappersPathParams = field()
    

@dataclass
class GetRealmIdentityProviderInstancesAliasMappersResponse:
    content_type: str = field()
    status_code: int = field()
    identity_provider_mapper_representations: Optional[List[shared.IdentityProviderMapperRepresentation]] = field(default=None)
    
