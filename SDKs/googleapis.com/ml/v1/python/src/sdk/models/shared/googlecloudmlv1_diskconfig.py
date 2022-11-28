from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1DiskConfig:
    r"""GoogleCloudMlV1DiskConfig
    Represents the config of disk options.
    """
    
    boot_disk_size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDiskSizeGb') }})
    boot_disk_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDiskType') }})
    
