from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutRealmUsersIDSendVerifyEmailPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmUsersIDSendVerifyEmailQueryParams:
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    redirect_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'redirect_uri', 'style': 'form', 'explode': True }})
    

@dataclass
class PutRealmUsersIDSendVerifyEmailRequest:
    path_params: PutRealmUsersIDSendVerifyEmailPathParams = field()
    query_params: PutRealmUsersIDSendVerifyEmailQueryParams = field()
    

@dataclass
class PutRealmUsersIDSendVerifyEmailResponse:
    content_type: str = field()
    status_code: int = field()
    
