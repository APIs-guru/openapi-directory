from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class InstanceMessageCodeEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    ZONE_DISTRIBUTION_UNBALANCED = "ZONE_DISTRIBUTION_UNBALANCED"


@dataclass_json
@dataclass
class InstanceMessage:
    code: Optional[InstanceMessageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
