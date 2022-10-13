from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class HTTPConfigHTTPEnabledStateEnum(str, Enum):
    HTTP_STATE_UNSPECIFIED = "HTTP_STATE_UNSPECIFIED"
    HTTP_ENABLED = "HTTP_ENABLED"
    HTTP_DISABLED = "HTTP_DISABLED"


@dataclass_json
@dataclass
class HTTPConfig:
    http_enabled_state: Optional[HTTPConfigHTTPEnabledStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpEnabledState' }})
    
