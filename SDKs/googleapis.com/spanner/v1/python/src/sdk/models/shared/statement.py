from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import type


@dataclass_json
@dataclass
class Statement:
    param_types: Optional[dict[str, type.Type]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paramTypes' }})
    params: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    
