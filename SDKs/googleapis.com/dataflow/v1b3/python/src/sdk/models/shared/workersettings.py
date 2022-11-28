from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkerSettings:
    r"""WorkerSettings
    Provides data to pass through to the worker harness.
    """
    
    base_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseUrl') }})
    reporting_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportingEnabled') }})
    service_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicePath') }})
    shuffle_service_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuffleServicePath') }})
    temp_storage_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempStoragePrefix') }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerId') }})
    
