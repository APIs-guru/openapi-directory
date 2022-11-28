from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventsOptionsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetEventsOptionsRequest:
    security: GetEventsOptionsSecurity = field()
    

@dataclass
class GetEventsOptionsResponse:
    content_type: str = field()
    status_code: int = field()
    audit_event_types_resp: Optional[shared.AuditEventTypesResp] = field(default=None)
    error_forbidden: Optional[shared.ErrorForbidden] = field(default=None)
    error_unauthorized: Optional[shared.ErrorUnauthorized] = field(default=None)
    no_content: Optional[shared.NoContent] = field(default=None)
    
