from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateScriptPathParams:
    script_id: str = field(metadata={'path_param': { 'field_name': 'scriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateScriptSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateScriptRequest:
    path_params: UpdateScriptPathParams = field()
    security: UpdateScriptSecurity = field()
    request: Optional[shared.Script] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateScriptResponse:
    content_type: str = field()
    status_code: int = field()
    script: Optional[shared.Script] = field(default=None)
    
