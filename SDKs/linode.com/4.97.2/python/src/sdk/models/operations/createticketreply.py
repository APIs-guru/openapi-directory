from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateTicketReplyPathParams:
    ticket_id: int = field(metadata={'path_param': { 'field_name': 'ticketId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTicketReplySecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateTicketReplyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateTicketReplyRequest:
    path_params: CreateTicketReplyPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTicketReplySecurity = field()
    

@dataclass
class CreateTicketReplyResponse:
    content_type: str = field()
    status_code: int = field()
    support_ticket_reply: Optional[shared.SupportTicketReply] = field(default=None)
    create_ticket_reply_default_application_json_object: Optional[CreateTicketReplyDefaultApplicationJSON] = field(default=None)
    
