from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class PutRealmUsersIDExecuteActionsEmailPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmUsersIDExecuteActionsEmailQueryParams:
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    lifespan: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'lifespan', 'style': 'form', 'explode': True }})
    redirect_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'redirect_uri', 'style': 'form', 'explode': True }})
    

@dataclass
class PutRealmUsersIDExecuteActionsEmailRequest:
    path_params: PutRealmUsersIDExecuteActionsEmailPathParams = field()
    query_params: PutRealmUsersIDExecuteActionsEmailQueryParams = field()
    request: List[str] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmUsersIDExecuteActionsEmailResponse:
    content_type: str = field()
    status_code: int = field()
    
