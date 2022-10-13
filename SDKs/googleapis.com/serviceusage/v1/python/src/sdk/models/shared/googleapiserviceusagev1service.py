from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleapiserviceusagev1serviceconfig

class GoogleAPIServiceusageV1ServiceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclass
class GoogleAPIServiceusageV1Service:
    config: Optional[googleapiserviceusagev1serviceconfig.GoogleAPIServiceusageV1ServiceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    state: Optional[GoogleAPIServiceusageV1ServiceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
