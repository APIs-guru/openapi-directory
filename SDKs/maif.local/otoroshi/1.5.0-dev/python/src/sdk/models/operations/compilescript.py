from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompileScriptSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CompileScriptRequest:
    request: Optional[shared.Script] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CompileScriptSecurity = field(default=None)
    

@dataclass
class CompileScriptResponse:
    content_type: str = field(default=None)
    script_compilation_result: Optional[shared.ScriptCompilationResult] = field(default=None)
    status_code: int = field(default=None)
    
