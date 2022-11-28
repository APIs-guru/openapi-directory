from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TextRotation:
    r"""TextRotation
    The rotation applied to text in a cell.
    """
    
    angle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('angle') }})
    vertical: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vertical') }})
    
