from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SandboxConfigTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    GVISOR = "GVISOR"


@dataclass_json
@dataclass
class SandboxConfig:
    r"""SandboxConfig
    SandboxConfig contains configurations of the sandbox to use for the node.
    """
    
    sandbox_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sandboxType') }})
    type: Optional[SandboxConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
