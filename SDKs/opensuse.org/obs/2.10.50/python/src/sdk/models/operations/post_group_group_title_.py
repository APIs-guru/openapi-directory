from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class PostGroupGroupTitlePathParams:
    group_title: str = field(default=None, metadata={'path_param': { 'field_name': 'group_title', 'style': 'simple', 'explode': False }})
    
class PostGroupGroupTitleCmdEnum(str, Enum):
    ADD_USER = "add_user"
    REMOVE_USER = "remove_user"
    SET_EMAIL = "set_email"


@dataclass
class PostGroupGroupTitleQueryParams:
    cmd: Optional[PostGroupGroupTitleCmdEnum] = field(default=None, metadata={'query_param': { 'field_name': 'cmd', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    userid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userid', 'style': 'form', 'explode': True }})
    

@dataclass
class PostGroupGroupTitleSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostGroupGroupTitleRequest:
    path_params: PostGroupGroupTitlePathParams = field(default=None)
    query_params: PostGroupGroupTitleQueryParams = field(default=None)
    security: PostGroupGroupTitleSecurity = field(default=None)
    

@dataclass
class PostGroupGroupTitleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
