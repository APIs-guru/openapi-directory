from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkerResource:
    r"""WorkerResource
    Configuration for resources used by Airflow workers.
    """
    
    cpu: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    max_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxCount') }})
    memory_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryGb') }})
    min_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minCount') }})
    storage_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageGb') }})
    
