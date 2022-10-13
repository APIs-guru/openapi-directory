from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import oraclerdbms
from . import oraclerdbms


@dataclass_json
@dataclass
class OracleSourceConfig:
    allowlist: Optional[oraclerdbms.OracleRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowlist' }})
    drop_large_objects: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dropLargeObjects' }})
    rejectlist: Optional[oraclerdbms.OracleRdbms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectlist' }})
    
