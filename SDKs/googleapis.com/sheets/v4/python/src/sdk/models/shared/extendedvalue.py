from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errorvalue


@dataclass_json
@dataclass
class ExtendedValue:
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boolValue' }})
    error_value: Optional[errorvalue.ErrorValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorValue' }})
    formula_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formulaValue' }})
    number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
