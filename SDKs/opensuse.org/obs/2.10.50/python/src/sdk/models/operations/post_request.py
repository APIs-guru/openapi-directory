from dataclasses import dataclass, field
from typing import Enum,Optional

class PostRequestAddrevisionEnum(str, Enum):
    ONE = "1"

class PostRequestCmdEnum(str, Enum):
    CREATE = "create"

class PostRequestIgnoreBuildStateEnum(str, Enum):
    ONE = "1"

class PostRequestIgnoreDelegateEnum(str, Enum):
    ONE = "1"


@dataclass
class PostRequestQueryParams:
    addrevision: Optional[PostRequestAddrevisionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'addrevision', 'style': 'form', 'explode': True }})
    cmd: PostRequestCmdEnum = field(default=None, metadata={'query_param': { 'field_name': 'cmd', 'style': 'form', 'explode': True }})
    ignore_build_state: Optional[PostRequestIgnoreBuildStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'ignore_build_state', 'style': 'form', 'explode': True }})
    ignore_delegate: Optional[PostRequestIgnoreDelegateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'ignore_delegate', 'style': 'form', 'explode': True }})
    

@dataclass
class PostRequestSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostRequestRequest:
    query_params: PostRequestQueryParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    security: PostRequestSecurity = field(default=None)
    

@dataclass
class PostRequestResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
