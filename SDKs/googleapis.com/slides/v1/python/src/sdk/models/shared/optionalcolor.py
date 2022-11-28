from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OptionalColor:
    r"""OptionalColor
    A color that can either be fully opaque or fully transparent.
    """
    
    opaque_color: Optional[OpaqueColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opaqueColor') }})
    
