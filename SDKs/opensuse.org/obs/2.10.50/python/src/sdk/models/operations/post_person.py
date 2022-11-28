from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class PostPersonCmdEnum(str, Enum):
    REGISTER = "register"


@dataclass
class PostPersonQueryParams:
    cmd: PostPersonCmdEnum = field(metadata={'query_param': { 'field_name': 'cmd', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPersonRequest:
    query_params: PostPersonQueryParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    

@dataclass
class PostPersonResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
