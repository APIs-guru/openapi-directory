from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateTicketReplyPathParams:
    ticket_id: int = field(default=None, metadata={'path_param': { 'field_name': 'ticketId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTicketReplySecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateTicketReplySecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateTicketReplySecurity:
    option1: Optional[CreateTicketReplySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateTicketReplySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateTicketReplyRequest:
    path_params: CreateTicketReplyPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTicketReplySecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateTicketReplyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateTicketReplyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    support_ticket_reply: Optional[shared.SupportTicketReply] = field(default=None)
    create_ticket_reply_default_application_json_object: Optional[CreateTicketReplyDefaultApplicationJSON] = field(default=None)
    
