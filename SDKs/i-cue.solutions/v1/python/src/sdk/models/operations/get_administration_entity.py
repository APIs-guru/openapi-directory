from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAdministrationEntityHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdministrationEntityRequest:
    headers: GetAdministrationEntityHeaders = field()
    

@dataclass
class GetAdministrationEntityResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    entities: Optional[List[shared.Entity]] = field(default=None)
    
