from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetTempPasswordPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetTempPasswordQueryParams:
    temp_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tempPassword', 'style': 'form', 'explode': True }})
    

@dataclass
class SetTempPasswordRequest:
    path_params: SetTempPasswordPathParams = field(default=None)
    query_params: SetTempPasswordQueryParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class SetTempPasswordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
