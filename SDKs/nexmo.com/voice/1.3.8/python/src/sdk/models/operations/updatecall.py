from dataclasses import dataclass, field
from typing import Any
from sdk.models import shared


@dataclass
class UpdateCallPathParams:
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCallSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateCallRequest:
    path_params: UpdateCallPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateCallSecurity = field(default=None)
    

@dataclass
class UpdateCallResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
