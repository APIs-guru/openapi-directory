from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateTicketSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateTicketSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateTicketSecurity:
    option1: Optional[CreateTicketSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateTicketSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateTicketRequest:
    request: Optional[shared.SupportTicketRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTicketSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateTicketDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateTicketResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    support_ticket: Optional[shared.SupportTicket] = field(default=None)
    create_ticket_default_application_json_object: Optional[CreateTicketDefaultApplicationJSON] = field(default=None)
    
