from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmUsersIDCredentialsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUsersIDCredentialsRequest:
    path_params: GetRealmUsersIDCredentialsPathParams = field()
    

@dataclass
class GetRealmUsersIDCredentialsResponse:
    content_type: str = field()
    status_code: int = field()
    credential_representations: Optional[List[shared.CredentialRepresentation]] = field(default=None)
    
