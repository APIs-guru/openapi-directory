from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LineFill:
    r"""LineFill
    The fill of the line.
    """
    
    solid_fill: Optional[SolidFill] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solidFill') }})
    
