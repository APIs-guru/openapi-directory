from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FindScriptByIDPathParams:
    script_id: str = field(metadata={'path_param': { 'field_name': 'scriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindScriptByIDSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindScriptByIDRequest:
    path_params: FindScriptByIDPathParams = field()
    security: FindScriptByIDSecurity = field()
    

@dataclass
class FindScriptByIDResponse:
    content_type: str = field()
    status_code: int = field()
    script: Optional[shared.Script] = field(default=None)
    
