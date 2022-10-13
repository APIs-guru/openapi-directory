from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import date


@dataclass_json
@dataclass
class Value:
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanValue' }})
    date_value: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateValue' }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    integer_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    timestamp_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampValue' }})
    
