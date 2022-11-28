from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HTTPConfigHTTPEnabledStateEnum(str, Enum):
    HTTP_STATE_UNSPECIFIED = "HTTP_STATE_UNSPECIFIED"
    HTTP_ENABLED = "HTTP_ENABLED"
    HTTP_DISABLED = "HTTP_DISABLED"


@dataclass_json
@dataclass
class HTTPConfig:
    r"""HTTPConfig
    The configuration of the HTTP bridge for a device registry.
    """
    
    http_enabled_state: Optional[HTTPConfigHTTPEnabledStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpEnabledState') }})
    
