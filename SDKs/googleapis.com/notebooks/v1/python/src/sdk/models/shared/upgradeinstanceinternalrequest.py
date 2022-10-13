from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UpgradeInstanceInternalRequestTypeEnum(str, Enum):
    UPGRADE_TYPE_UNSPECIFIED = "UPGRADE_TYPE_UNSPECIFIED"
    UPGRADE_FRAMEWORK = "UPGRADE_FRAMEWORK"
    UPGRADE_OS = "UPGRADE_OS"
    UPGRADE_CUDA = "UPGRADE_CUDA"
    UPGRADE_ALL = "UPGRADE_ALL"


@dataclass_json
@dataclass
class UpgradeInstanceInternalRequest:
    type: Optional[UpgradeInstanceInternalRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmId' }})
    
