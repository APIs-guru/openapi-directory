from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmUsersPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUsersQueryParams:
    brief_representation: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'briefRepresentation', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    first: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'first', 'style': 'form', 'explode': True }})
    first_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'firstName', 'style': 'form', 'explode': True }})
    last_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lastName', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    username: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmUsersRequest:
    path_params: GetRealmUsersPathParams = field(default=None)
    query_params: GetRealmUsersQueryParams = field(default=None)
    

@dataclass
class GetRealmUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_representations: Optional[List[shared.UserRepresentation]] = field(default=None)
    
