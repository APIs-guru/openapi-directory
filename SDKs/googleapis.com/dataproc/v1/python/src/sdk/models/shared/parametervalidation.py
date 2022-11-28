from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParameterValidation:
    r"""ParameterValidation
    Configuration for parameter validation.
    """
    
    regex: Optional[RegexValidation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    values: Optional[ValueValidation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
