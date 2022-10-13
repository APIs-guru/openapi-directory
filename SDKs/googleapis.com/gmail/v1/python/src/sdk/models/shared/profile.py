from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Profile:
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    history_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historyId' }})
    messages_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messagesTotal' }})
    threads_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threadsTotal' }})
    
