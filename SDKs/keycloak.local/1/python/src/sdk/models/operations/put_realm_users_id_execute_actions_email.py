from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class PutRealmUsersIDExecuteActionsEmailPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmUsersIDExecuteActionsEmailQueryParams:
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    lifespan: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'lifespan', 'style': 'form', 'explode': True }})
    redirect_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'redirect_uri', 'style': 'form', 'explode': True }})
    

@dataclass
class PutRealmUsersIDExecuteActionsEmailRequest:
    path_params: PutRealmUsersIDExecuteActionsEmailPathParams = field(default=None)
    query_params: PutRealmUsersIDExecuteActionsEmailQueryParams = field(default=None)
    request: List[str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmUsersIDExecuteActionsEmailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
