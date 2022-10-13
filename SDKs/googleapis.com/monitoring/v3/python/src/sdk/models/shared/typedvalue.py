from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import distribution


@dataclass_json
@dataclass
class TypedValue:
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boolValue' }})
    distribution_value: Optional[distribution.Distribution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionValue' }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    int64_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'int64Value' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
