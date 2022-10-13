from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SandboxConfigTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    GVISOR = "GVISOR"


@dataclass_json
@dataclass
class SandboxConfig:
    sandbox_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sandboxType' }})
    type: Optional[SandboxConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
