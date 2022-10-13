from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import nesteddevice

class RackUnitFaceLabelEnum(str, Enum):
    FRONT = "Front"
    REAR = "Rear"

class RackUnitFaceValueEnum(str, Enum):
    FRONT = "front"
    REAR = "rear"


@dataclass_json
@dataclass
class RackUnitFaceFace:
    label: RackUnitFaceLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: RackUnitFaceValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class RackUnit:
    device: Optional[nesteddevice.NestedDevice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    face: Optional[RackUnitFaceFace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'face' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
