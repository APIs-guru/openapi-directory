from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataValidationRule:
    r"""DataValidationRule
    A data validation rule.
    """
    
    condition: Optional[BooleanCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    input_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputMessage') }})
    show_custom_ui: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showCustomUi') }})
    strict: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strict') }})
    
