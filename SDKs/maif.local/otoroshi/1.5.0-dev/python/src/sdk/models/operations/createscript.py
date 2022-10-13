from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateScriptSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateScriptRequest:
    request: Optional[shared.Script] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateScriptSecurity = field(default=None)
    

@dataclass
class CreateScriptResponse:
    content_type: str = field(default=None)
    script: Optional[shared.Script] = field(default=None)
    status_code: int = field(default=None)
    
