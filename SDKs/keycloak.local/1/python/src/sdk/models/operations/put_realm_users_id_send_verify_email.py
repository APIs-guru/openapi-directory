from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutRealmUsersIDSendVerifyEmailPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmUsersIDSendVerifyEmailQueryParams:
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    redirect_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'redirect_uri', 'style': 'form', 'explode': True }})
    

@dataclass
class PutRealmUsersIDSendVerifyEmailRequest:
    path_params: PutRealmUsersIDSendVerifyEmailPathParams = field(default=None)
    query_params: PutRealmUsersIDSendVerifyEmailQueryParams = field(default=None)
    

@dataclass
class PutRealmUsersIDSendVerifyEmailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
