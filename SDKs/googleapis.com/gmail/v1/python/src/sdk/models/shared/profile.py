from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Profile:
    r"""Profile
    Profile for a Gmail user.
    """
    
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    history_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('historyId') }})
    messages_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messagesTotal') }})
    threads_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threadsTotal') }})
    
