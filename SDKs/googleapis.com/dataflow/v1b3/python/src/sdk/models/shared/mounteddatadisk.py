from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MountedDataDisk:
    r"""MountedDataDisk
    Describes mounted data disk.
    """
    
    data_disk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDisk') }})
    
