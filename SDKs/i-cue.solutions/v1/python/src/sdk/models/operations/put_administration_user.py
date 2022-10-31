from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutAdministrationUserHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAdministrationUserRequest:
    headers: PutAdministrationUserHeaders = field(default=None)
    

@dataclass
class PutAdministrationUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
