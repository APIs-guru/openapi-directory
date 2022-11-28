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
class UpdateConditionalFormatRuleRequest:
    r"""UpdateConditionalFormatRuleRequest
    Updates a conditional format rule at the given index, or moves a conditional format rule to another index.
    """
    
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    new_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newIndex') }})
    rule: Optional[ConditionalFormatRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    
