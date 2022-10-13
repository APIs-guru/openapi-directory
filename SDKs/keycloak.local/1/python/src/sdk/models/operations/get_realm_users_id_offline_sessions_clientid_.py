from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmUsersIDOfflineSessionsClientIDPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUsersIDOfflineSessionsClientIDRequest:
    path_params: GetRealmUsersIDOfflineSessionsClientIDPathParams = field(default=None)
    

@dataclass
class GetRealmUsersIDOfflineSessionsClientIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_session_representations: Optional[List[shared.UserSessionRepresentation]] = field(default=None)
    
