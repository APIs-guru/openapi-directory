from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class JobMessageMessageImportanceEnum(str, Enum):
    JOB_MESSAGE_IMPORTANCE_UNKNOWN = "JOB_MESSAGE_IMPORTANCE_UNKNOWN"
    JOB_MESSAGE_DEBUG = "JOB_MESSAGE_DEBUG"
    JOB_MESSAGE_DETAILED = "JOB_MESSAGE_DETAILED"
    JOB_MESSAGE_BASIC = "JOB_MESSAGE_BASIC"
    JOB_MESSAGE_WARNING = "JOB_MESSAGE_WARNING"
    JOB_MESSAGE_ERROR = "JOB_MESSAGE_ERROR"


@dataclass_json
@dataclass
class JobMessage:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message_importance: Optional[JobMessageMessageImportanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageImportance' }})
    message_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageText' }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    
