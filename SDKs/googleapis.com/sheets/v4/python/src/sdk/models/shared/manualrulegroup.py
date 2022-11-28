from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ManualRuleGroup:
    r"""ManualRuleGroup
    A group name and a list of items from the source data that should be placed in the group with this name.
    """
    
    group_name: Optional[ExtendedValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupName') }})
    items: Optional[List[ExtendedValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
