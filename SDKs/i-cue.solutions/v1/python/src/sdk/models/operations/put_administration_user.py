from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutAdministrationUserHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAdministrationUserRequest:
    headers: PutAdministrationUserHeaders = field()
    

@dataclass
class PutAdministrationUserResponse:
    content_type: str = field()
    status_code: int = field()
    
