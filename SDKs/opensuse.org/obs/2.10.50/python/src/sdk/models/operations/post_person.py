from dataclasses import dataclass, field
from typing import Enum

class PostPersonCmdEnum(str, Enum):
    REGISTER = "register"


@dataclass
class PostPersonQueryParams:
    cmd: PostPersonCmdEnum = field(default=None, metadata={'query_param': { 'field_name': 'cmd', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPersonRequest:
    query_params: PostPersonQueryParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    

@dataclass
class PostPersonResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
