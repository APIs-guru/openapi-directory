from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VisitedExpression:
    r"""VisitedExpression
    Store the position and access outcome for an expression visited in rules.
    """
    
    source_position: Optional[SourcePosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePosition') }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
