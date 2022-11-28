from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Measurement3d:
    r"""Measurement3d
    A Generic 3d measurement sample.
    """
    
    capture_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('captureTime') }})
    x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x') }})
    y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('y') }})
    z: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('z') }})
    
