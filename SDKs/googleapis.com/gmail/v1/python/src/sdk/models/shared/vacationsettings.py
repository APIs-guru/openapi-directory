from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VacationSettings:
    r"""VacationSettings
    Vacation auto-reply settings for an account. These settings correspond to the \"Vacation responder\" feature in the web interface.
    """
    
    enable_auto_reply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAutoReply') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    response_body_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseBodyHtml') }})
    response_body_plain_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseBodyPlainText') }})
    response_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseSubject') }})
    restrict_to_contacts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictToContacts') }})
    restrict_to_domain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictToDomain') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
