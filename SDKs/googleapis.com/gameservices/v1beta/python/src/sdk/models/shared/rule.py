from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Rule
    A rule to be applied in a Policy.
    """
    
    action: Optional[RuleActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    conditions: Optional[List[Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    in_: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in') }})
    log_config: Optional[List[LogConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logConfig') }})
    not_in: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notIn') }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
