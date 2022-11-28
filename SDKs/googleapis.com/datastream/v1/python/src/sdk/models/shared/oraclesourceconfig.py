from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OracleSourceConfig:
    r"""OracleSourceConfig
    Oracle data source configuration
    """
    
    drop_large_objects: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropLargeObjects') }})
    exclude_objects: Optional[OracleRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeObjects') }})
    include_objects: Optional[OracleRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeObjects') }})
    max_concurrent_cdc_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxConcurrentCdcTasks') }})
    stream_large_objects: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamLargeObjects') }})
    
