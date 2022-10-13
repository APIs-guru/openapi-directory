from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDOfflineSessionsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDOfflineSessionsQueryParams:
    first: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'first', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmClientsIDOfflineSessionsRequest:
    path_params: GetRealmClientsIDOfflineSessionsPathParams = field(default=None)
    query_params: GetRealmClientsIDOfflineSessionsQueryParams = field(default=None)
    

@dataclass
class GetRealmClientsIDOfflineSessionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_session_representations: Optional[List[shared.UserSessionRepresentation]] = field(default=None)
    
