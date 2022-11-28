from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateConditionalFormatRuleResponse:
    r"""UpdateConditionalFormatRuleResponse
    The result of updating a conditional format rule.
    """
    
    new_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newIndex') }})
    new_rule: Optional[ConditionalFormatRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newRule') }})
    old_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldIndex') }})
    old_rule: Optional[ConditionalFormatRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldRule') }})
    
