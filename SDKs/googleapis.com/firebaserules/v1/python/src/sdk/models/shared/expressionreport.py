from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExpressionReport:
    r"""ExpressionReport
    Describes where in a file an expression is found and what it was evaluated to over the course of its use.
    """
    
    children: Optional[List[ExpressionReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('children') }})
    source_position: Optional[SourcePosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePosition') }})
    values: Optional[List[ValueCount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
