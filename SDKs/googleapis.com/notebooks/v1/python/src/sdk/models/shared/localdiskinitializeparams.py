from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LocalDiskInitializeParamsDiskTypeEnum(str, Enum):
    DISK_TYPE_UNSPECIFIED = "DISK_TYPE_UNSPECIFIED"
    PD_STANDARD = "PD_STANDARD"
    PD_SSD = "PD_SSD"
    PD_BALANCED = "PD_BALANCED"
    PD_EXTREME = "PD_EXTREME"


@dataclass_json
@dataclass
class LocalDiskInitializeParams:
    r"""LocalDiskInitializeParams
    Input only. Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new runtime. This property is mutually exclusive with the source property; you can only define one or the other, but not both.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskName') }})
    disk_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSizeGb') }})
    disk_type: Optional[LocalDiskInitializeParamsDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    
