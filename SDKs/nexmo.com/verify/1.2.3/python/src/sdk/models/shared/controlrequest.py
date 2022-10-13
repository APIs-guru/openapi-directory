from dataclasses import dataclass, field
from typing import Enum

class ControlRequestCmdEnum(str, Enum):
    CANCEL = "cancel"
    TRIGGER_NEXT_EVENT = "trigger_next_event"


@dataclass
class ControlRequest:
    api_key: str = field(default=None, metadata={'form': { 'field_name': 'api_key' }})
    api_secret: str = field(default=None, metadata={'form': { 'field_name': 'api_secret' }})
    cmd: ControlRequestCmdEnum = field(default=None, metadata={'form': { 'field_name': 'cmd' }})
    request_id: str = field(default=None, metadata={'form': { 'field_name': 'request_id' }})
    
