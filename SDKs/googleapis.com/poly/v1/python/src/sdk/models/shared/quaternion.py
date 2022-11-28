from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Quaternion:
    r"""Quaternion
    A [Quaternion](//en.wikipedia.org/wiki/Quaternion). Please note: if in the response you see \"w: 1\" and nothing else this is the default value of [0, 0, 0, 1] where x,y, and z are 0.
    """
    
    w: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('w') }})
    x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x') }})
    y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('y') }})
    z: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('z') }})
    
