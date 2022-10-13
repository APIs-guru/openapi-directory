from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NodeTaintEffectEnum(str, Enum):
    EFFECT_UNSPECIFIED = "EFFECT_UNSPECIFIED"
    NO_SCHEDULE = "NO_SCHEDULE"
    PREFER_NO_SCHEDULE = "PREFER_NO_SCHEDULE"
    NO_EXECUTE = "NO_EXECUTE"


@dataclass_json
@dataclass
class NodeTaint:
    effect: Optional[NodeTaintEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effect' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
