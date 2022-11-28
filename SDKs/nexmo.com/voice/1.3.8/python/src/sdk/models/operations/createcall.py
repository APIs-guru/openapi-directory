from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateCallSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateCallRequest:
    security: CreateCallSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCallResponse:
    content_type: str = field()
    status_code: int = field()
    create_call_response: Optional[shared.CreateCallResponse] = field(default=None)
    
