from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mysqlrdbms
from . import mysqlrdbms


@dataclass_json
@dataclass
class MysqlSourceConfig:
    exclude_objects: Optional[mysqlrdbms.MysqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeObjects' }})
    include_objects: Optional[mysqlrdbms.MysqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeObjects' }})
    max_concurrent_cdc_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxConcurrentCdcTasks' }})
    
