from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmUsersIDCredentialsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUsersIDCredentialsRequest:
    path_params: GetRealmUsersIDCredentialsPathParams = field(default=None)
    

@dataclass
class GetRealmUsersIDCredentialsResponse:
    content_type: str = field(default=None)
    credential_representations: Optional[List[shared.CredentialRepresentation]] = field(default=None)
    status_code: int = field(default=None)
    
