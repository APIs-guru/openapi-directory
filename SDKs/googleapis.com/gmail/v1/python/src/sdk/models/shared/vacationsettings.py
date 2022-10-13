from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VacationSettings:
    enable_auto_reply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAutoReply' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    response_body_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseBodyHtml' }})
    response_body_plain_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseBodyPlainText' }})
    response_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseSubject' }})
    restrict_to_contacts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictToContacts' }})
    restrict_to_domain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictToDomain' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
