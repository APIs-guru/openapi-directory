from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import condition
from . import logconfig

class RuleActionEnum(str, Enum):
    NO_ACTION = "NO_ACTION"
    ALLOW = "ALLOW"
    ALLOW_WITH_LOG = "ALLOW_WITH_LOG"
    DENY = "DENY"
    DENY_WITH_LOG = "DENY_WITH_LOG"
    LOG = "LOG"


@dataclass_json
@dataclass
class Rule:
    action: Optional[RuleActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    conditions: Optional[List[condition.Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    in_: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in' }})
    log_config: Optional[List[logconfig.LogConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logConfig' }})
    not_in: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notIn' }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    
