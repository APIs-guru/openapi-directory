from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConditionalFormatRule:
    r"""ConditionalFormatRule
    A rule describing a conditional format.
    """
    
    boolean_rule: Optional[BooleanRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanRule') }})
    gradient_rule: Optional[GradientRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gradientRule') }})
    ranges: Optional[List[GridRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranges') }})
    
