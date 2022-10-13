from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import oraclerdbms
from . import oraclerdbms


@dataclass_json
@dataclass
class OracleSourceConfig:
    drop_large_objects: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dropLargeObjects' }})
    exclude_objects: Optional[oraclerdbms.OracleRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeObjects' }})
    include_objects: Optional[oraclerdbms.OracleRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeObjects' }})
    max_concurrent_cdc_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxConcurrentCdcTasks' }})
    stream_large_objects: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamLargeObjects' }})
    
