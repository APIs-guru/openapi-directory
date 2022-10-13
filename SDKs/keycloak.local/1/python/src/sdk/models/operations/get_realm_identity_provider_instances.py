from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmIdentityProviderInstancesPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmIdentityProviderInstancesRequest:
    path_params: GetRealmIdentityProviderInstancesPathParams = field(default=None)
    

@dataclass
class GetRealmIdentityProviderInstancesResponse:
    content_type: str = field(default=None)
    identity_provider_representations: Optional[List[shared.IdentityProviderRepresentation]] = field(default=None)
    status_code: int = field(default=None)
    
