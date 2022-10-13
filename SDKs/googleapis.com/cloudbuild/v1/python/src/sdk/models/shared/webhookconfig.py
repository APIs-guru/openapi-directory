from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WebhookConfigStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    OK = "OK"
    SECRET_DELETED = "SECRET_DELETED"


@dataclass_json
@dataclass
class WebhookConfig:
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    state: Optional[WebhookConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
