from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RackUnitFaceLabelEnum(str, Enum):
    FRONT = "Front"
    REAR = "Rear"

class RackUnitFaceValueEnum(str, Enum):
    FRONT = "front"
    REAR = "rear"


@dataclass_json
@dataclass
class RackUnitFace:
    label: RackUnitFaceLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: RackUnitFaceValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class RackUnit:
    device: Optional[NestedDevice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    face: Optional[RackUnitFace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('face') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
