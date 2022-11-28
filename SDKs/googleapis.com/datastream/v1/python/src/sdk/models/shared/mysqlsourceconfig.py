from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MysqlSourceConfig:
    r"""MysqlSourceConfig
    MySQL source configuration
    """
    
    exclude_objects: Optional[MysqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeObjects') }})
    include_objects: Optional[MysqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeObjects') }})
    max_concurrent_cdc_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxConcurrentCdcTasks') }})
    
