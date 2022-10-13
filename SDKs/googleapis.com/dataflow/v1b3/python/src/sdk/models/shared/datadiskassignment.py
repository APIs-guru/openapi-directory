from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DataDiskAssignment:
    data_disks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataDisks' }})
    vm_instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmInstance' }})
    
