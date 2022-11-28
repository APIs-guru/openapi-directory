from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmUsersIDSessionsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUsersIDSessionsRequest:
    path_params: GetRealmUsersIDSessionsPathParams = field()
    

@dataclass
class GetRealmUsersIDSessionsResponse:
    content_type: str = field()
    status_code: int = field()
    user_session_representations: Optional[List[shared.UserSessionRepresentation]] = field(default=None)
    
