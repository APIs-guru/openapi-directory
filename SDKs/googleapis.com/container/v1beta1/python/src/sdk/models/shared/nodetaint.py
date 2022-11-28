from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NodeTaintEffectEnum(str, Enum):
    EFFECT_UNSPECIFIED = "EFFECT_UNSPECIFIED"
    NO_SCHEDULE = "NO_SCHEDULE"
    PREFER_NO_SCHEDULE = "PREFER_NO_SCHEDULE"
    NO_EXECUTE = "NO_EXECUTE"


@dataclass_json
@dataclass
class NodeTaint:
    r"""NodeTaint
    Kubernetes taint is comprised of three fields: key, value, and effect. Effect can only be one of three types: NoSchedule, PreferNoSchedule or NoExecute. See [here](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration) for more information, including usage and the valid values.
    """
    
    effect: Optional[NodeTaintEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effect') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
