from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import message


@dataclass_json
@dataclass
class SendMessageRequest:
    message: Optional[message.Message] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    
