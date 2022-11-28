from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmIdentityProviderInstancesPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmIdentityProviderInstancesRequest:
    path_params: GetRealmIdentityProviderInstancesPathParams = field()
    

@dataclass
class GetRealmIdentityProviderInstancesResponse:
    content_type: str = field()
    status_code: int = field()
    identity_provider_representations: Optional[List[shared.IdentityProviderRepresentation]] = field(default=None)
    
