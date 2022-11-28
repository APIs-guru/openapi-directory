from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PostGroupGroupTitlePathParams:
    group_title: str = field(metadata={'path_param': { 'field_name': 'group_title', 'style': 'simple', 'explode': False }})
    
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
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostGroupGroupTitleRequest:
    path_params: PostGroupGroupTitlePathParams = field()
    query_params: PostGroupGroupTitleQueryParams = field()
    security: PostGroupGroupTitleSecurity = field()
    

@dataclass
class PostGroupGroupTitleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
