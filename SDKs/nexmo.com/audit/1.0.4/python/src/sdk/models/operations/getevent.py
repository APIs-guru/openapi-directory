from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetEventRequest:
    path_params: GetEventPathParams = field()
    security: GetEventSecurity = field()
    

@dataclass
class GetEventResponse:
    content_type: str = field()
    status_code: int = field()
    audit_event: Optional[shared.AuditEvent] = field(default=None)
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    error_unauthorized: Optional[shared.ErrorUnauthorized] = field(default=None)
    
