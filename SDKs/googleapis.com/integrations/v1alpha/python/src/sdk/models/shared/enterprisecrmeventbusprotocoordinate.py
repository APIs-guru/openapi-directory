from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoCoordinate:
    r"""EnterpriseCrmEventbusProtoCoordinate
    Represents two-dimensional positions.
    """
    
    x: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x') }})
    y: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('y') }})
    
