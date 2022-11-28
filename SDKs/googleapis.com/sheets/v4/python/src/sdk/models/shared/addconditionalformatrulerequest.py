from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddConditionalFormatRuleRequest:
    r"""AddConditionalFormatRuleRequest
    Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented.
    """
    
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    rule: Optional[ConditionalFormatRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    
