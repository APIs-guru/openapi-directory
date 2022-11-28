from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WebServerResource:
    r"""WebServerResource
    Configuration for resources used by Airflow web server.
    """
    
    cpu: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    memory_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryGb') }})
    storage_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageGb') }})
    
