from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SchedulerResource:
    r"""SchedulerResource
    Configuration for resources used by Airflow schedulers.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    cpu: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    memory_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryGb') }})
    storage_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageGb') }})
    
