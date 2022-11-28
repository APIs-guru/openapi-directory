from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DebuggeeCanaryModeEnum(str, Enum):
    CANARY_MODE_UNSPECIFIED = "CANARY_MODE_UNSPECIFIED"
    CANARY_MODE_ALWAYS_ENABLED = "CANARY_MODE_ALWAYS_ENABLED"
    CANARY_MODE_ALWAYS_DISABLED = "CANARY_MODE_ALWAYS_DISABLED"
    CANARY_MODE_DEFAULT_ENABLED = "CANARY_MODE_DEFAULT_ENABLED"
    CANARY_MODE_DEFAULT_DISABLED = "CANARY_MODE_DEFAULT_DISABLED"


@dataclass_json
@dataclass
class Debuggee:
    r"""Debuggee
    Represents the debugged application. The application may include one or more replicated processes executing the same code. Each of these processes is attached with a debugger agent, carrying out the debugging commands. Agents attached to the same debuggee identify themselves as such by using exactly the same Debuggee message value when registering.
    """
    
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentVersion') }})
    canary_mode: Optional[DebuggeeCanaryModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canaryMode') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ext_source_contexts: Optional[List[ExtendedSourceContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extSourceContexts') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDisabled') }})
    is_inactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isInactive') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    source_contexts: Optional[List[SourceContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceContexts') }})
    status: Optional[StatusMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    uniquifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniquifier') }})
    
