from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ColorStop:
    r"""ColorStop
    A color and position in a gradient band.
    """
    
    alpha: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alpha') }})
    color: Optional[OpaqueColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    position: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    
