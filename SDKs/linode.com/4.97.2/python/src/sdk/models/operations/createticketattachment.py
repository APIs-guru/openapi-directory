from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateTicketAttachmentPathParams:
    ticket_id: int = field(default=None, metadata={'path_param': { 'field_name': 'ticketId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTicketAttachmentSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateTicketAttachmentSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateTicketAttachmentSecurity:
    option1: Optional[CreateTicketAttachmentSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateTicketAttachmentSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateTicketAttachmentRequest:
    path_params: CreateTicketAttachmentPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: CreateTicketAttachmentSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateTicketAttachmentDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateTicketAttachmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_ticket_attachment_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    create_ticket_attachment_default_application_json_object: Optional[CreateTicketAttachmentDefaultApplicationJSON] = field(default=None)
    
