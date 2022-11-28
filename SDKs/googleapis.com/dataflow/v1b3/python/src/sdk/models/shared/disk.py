from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Disk:
    r"""Disk
    Describes the data disk used by a workflow job.
    """
    
    disk_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    mount_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPoint') }})
    size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeGb') }})
    
