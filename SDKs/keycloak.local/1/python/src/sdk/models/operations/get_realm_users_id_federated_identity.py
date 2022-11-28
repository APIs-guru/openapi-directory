from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmUsersIDFederatedIdentityPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUsersIDFederatedIdentityRequest:
    path_params: GetRealmUsersIDFederatedIdentityPathParams = field()
    

@dataclass
class GetRealmUsersIDFederatedIdentityResponse:
    content_type: str = field()
    status_code: int = field()
    federated_identity_representations: Optional[List[shared.FederatedIdentityRepresentation]] = field(default=None)
    
