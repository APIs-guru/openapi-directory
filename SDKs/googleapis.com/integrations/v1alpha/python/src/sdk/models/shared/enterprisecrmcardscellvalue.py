from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnterpriseCrmCardsCellValue:
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanValue' }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    empty: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'empty' }})
    long_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
