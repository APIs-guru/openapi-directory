from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateTicketAttachmentPathParams:
    ticket_id: int = field(metadata={'path_param': { 'field_name': 'ticketId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTicketAttachmentSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateTicketAttachmentDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateTicketAttachmentRequest:
    path_params: CreateTicketAttachmentPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: CreateTicketAttachmentSecurity = field()
    

@dataclass
class CreateTicketAttachmentResponse:
    content_type: str = field()
    status_code: int = field()
    create_ticket_attachment_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    create_ticket_attachment_default_application_json_object: Optional[CreateTicketAttachmentDefaultApplicationJSON] = field(default=None)
    
