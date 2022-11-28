from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DataDiskAssignment:
    r"""DataDiskAssignment
    Data disk assignment for a given VM instance.
    """
    
    data_disks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDisks') }})
    vm_instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmInstance') }})
    
