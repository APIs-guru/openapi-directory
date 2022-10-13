from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAdministrationEntityHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class GetAdministrationEntityRequest:
    headers: GetAdministrationEntityHeaders = field(default=None)
    

@dataclass
class GetAdministrationEntityResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    entities: Optional[List[shared.Entity]] = field(default=None)
    status_code: int = field(default=None)
    
