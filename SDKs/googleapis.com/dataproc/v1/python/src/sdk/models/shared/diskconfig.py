from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DiskConfig:
    r"""DiskConfig
    Specifies the config of disk options for a group of VM instances.
    """
    
    boot_disk_size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDiskSizeGb') }})
    boot_disk_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDiskType') }})
    local_ssd_interface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localSsdInterface') }})
    num_local_ssds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numLocalSsds') }})
    
