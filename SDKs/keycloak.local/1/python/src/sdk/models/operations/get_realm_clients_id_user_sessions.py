from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDUserSessionsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDUserSessionsQueryParams:
    first: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'first', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmClientsIDUserSessionsRequest:
    path_params: GetRealmClientsIDUserSessionsPathParams = field()
    query_params: GetRealmClientsIDUserSessionsQueryParams = field()
    

@dataclass
class GetRealmClientsIDUserSessionsResponse:
    content_type: str = field()
    status_code: int = field()
    user_session_representations: Optional[List[shared.UserSessionRepresentation]] = field(default=None)
    
