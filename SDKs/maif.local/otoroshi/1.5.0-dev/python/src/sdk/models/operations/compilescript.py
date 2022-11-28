from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompileScriptSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CompileScriptRequest:
    security: CompileScriptSecurity = field()
    request: Optional[shared.Script] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CompileScriptResponse:
    content_type: str = field()
    status_code: int = field()
    script_compilation_result: Optional[shared.ScriptCompilationResult] = field(default=None)
    
