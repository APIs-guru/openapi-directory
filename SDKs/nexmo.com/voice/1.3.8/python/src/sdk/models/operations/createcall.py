from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateCallSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateCallRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCallSecurity = field(default=None)
    

@dataclass
class CreateCallResponse:
    content_type: str = field(default=None)
    create_call_response: Optional[shared.CreateCallResponse] = field(default=None)
    status_code: int = field(default=None)
    
