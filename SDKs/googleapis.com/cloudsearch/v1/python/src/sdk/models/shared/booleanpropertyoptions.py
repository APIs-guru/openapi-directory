from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BooleanPropertyOptions:
    r"""BooleanPropertyOptions
    The options for boolean properties.
    """
    
    operator_options: Optional[BooleanOperatorOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorOptions') }})
    
