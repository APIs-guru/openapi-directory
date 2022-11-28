from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetReportUserHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportUserRequest:
    headers: GetReportUserHeaders = field()
    

@dataclass
class GetReportUserResponse:
    content_type: str = field()
    status_code: int = field()
    
