from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateScriptSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateScriptRequest:
    security: CreateScriptSecurity = field()
    request: Optional[shared.Script] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateScriptResponse:
    content_type: str = field()
    status_code: int = field()
    script: Optional[shared.Script] = field(default=None)
    
