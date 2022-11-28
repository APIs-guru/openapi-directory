from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PatchUsersUserIDPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchUsersUserIDQueryParams:
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    username: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class PatchUsersUserIDRequest:
    path_params: PatchUsersUserIDPathParams = field()
    query_params: PatchUsersUserIDQueryParams = field()
    

@dataclass
class PatchUsersUserIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
