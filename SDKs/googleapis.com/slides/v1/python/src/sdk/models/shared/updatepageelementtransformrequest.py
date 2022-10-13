from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import affinetransform

class UpdatePageElementTransformRequestApplyModeEnum(str, Enum):
    APPLY_MODE_UNSPECIFIED = "APPLY_MODE_UNSPECIFIED"
    RELATIVE = "RELATIVE"
    ABSOLUTE = "ABSOLUTE"


@dataclass_json
@dataclass
class UpdatePageElementTransformRequest:
    apply_mode: Optional[UpdatePageElementTransformRequestApplyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applyMode' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    transform: Optional[affinetransform.AffineTransform] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transform' }})
    
