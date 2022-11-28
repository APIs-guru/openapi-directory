from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteConditionalFormatRuleResponse:
    r"""DeleteConditionalFormatRuleResponse
    The result of deleting a conditional format rule.
    """
    
    rule: Optional[ConditionalFormatRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    
