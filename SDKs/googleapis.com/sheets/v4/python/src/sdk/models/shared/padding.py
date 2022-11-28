from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Padding:
    r"""Padding
    The amount of padding around the cell, in pixels. When updating padding, every field must be specified.
    """
    
    bottom: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottom') }})
    left: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('left') }})
    right: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('right') }})
    top: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('top') }})
    
