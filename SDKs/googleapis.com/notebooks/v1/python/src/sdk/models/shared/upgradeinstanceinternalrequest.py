from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UpgradeInstanceInternalRequestTypeEnum(str, Enum):
    UPGRADE_TYPE_UNSPECIFIED = "UPGRADE_TYPE_UNSPECIFIED"
    UPGRADE_FRAMEWORK = "UPGRADE_FRAMEWORK"
    UPGRADE_OS = "UPGRADE_OS"
    UPGRADE_CUDA = "UPGRADE_CUDA"
    UPGRADE_ALL = "UPGRADE_ALL"


@dataclass_json
@dataclass
class UpgradeInstanceInternalRequest:
    r"""UpgradeInstanceInternalRequest
    Request for upgrading a notebook instance from within the VM
    """
    
    type: Optional[UpgradeInstanceInternalRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmId') }})
    
