from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Slicer:
    r"""Slicer
    A slicer in a sheet.
    """
    
    position: Optional[EmbeddedObjectPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    slicer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slicerId') }})
    spec: Optional[SlicerSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
