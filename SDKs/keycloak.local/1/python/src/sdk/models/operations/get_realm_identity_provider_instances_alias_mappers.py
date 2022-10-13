from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmIdentityProviderInstancesAliasMappersPathParams:
    alias: str = field(default=None, metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmIdentityProviderInstancesAliasMappersRequest:
    path_params: GetRealmIdentityProviderInstancesAliasMappersPathParams = field(default=None)
    

@dataclass
class GetRealmIdentityProviderInstancesAliasMappersResponse:
    content_type: str = field(default=None)
    identity_provider_mapper_representations: Optional[List[shared.IdentityProviderMapperRepresentation]] = field(default=None)
    status_code: int = field(default=None)
    
