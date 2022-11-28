from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SolidFill:
    r"""SolidFill
    A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists.
    """
    
    alpha: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alpha') }})
    color: Optional[OpaqueColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    
