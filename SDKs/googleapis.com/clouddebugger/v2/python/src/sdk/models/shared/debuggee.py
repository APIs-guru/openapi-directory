from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import extendedsourcecontext
from . import sourcecontext
from . import statusmessage

class DebuggeeCanaryModeEnum(str, Enum):
    CANARY_MODE_UNSPECIFIED = "CANARY_MODE_UNSPECIFIED"
    CANARY_MODE_ALWAYS_ENABLED = "CANARY_MODE_ALWAYS_ENABLED"
    CANARY_MODE_ALWAYS_DISABLED = "CANARY_MODE_ALWAYS_DISABLED"
    CANARY_MODE_DEFAULT_ENABLED = "CANARY_MODE_DEFAULT_ENABLED"
    CANARY_MODE_DEFAULT_DISABLED = "CANARY_MODE_DEFAULT_DISABLED"


@dataclass_json
@dataclass
class Debuggee:
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentVersion' }})
    canary_mode: Optional[DebuggeeCanaryModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canaryMode' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ext_source_contexts: Optional[List[extendedsourcecontext.ExtendedSourceContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extSourceContexts' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDisabled' }})
    is_inactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isInactive' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    source_contexts: Optional[List[sourcecontext.SourceContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceContexts' }})
    status: Optional[statusmessage.StatusMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    uniquifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniquifier' }})
    
