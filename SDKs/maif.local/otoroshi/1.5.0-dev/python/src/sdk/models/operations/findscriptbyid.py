from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FindScriptByIDPathParams:
    script_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindScriptByIDSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindScriptByIDRequest:
    path_params: FindScriptByIDPathParams = field(default=None)
    security: FindScriptByIDSecurity = field(default=None)
    

@dataclass
class FindScriptByIDResponse:
    content_type: str = field(default=None)
    script: Optional[shared.Script] = field(default=None)
    status_code: int = field(default=None)
    
