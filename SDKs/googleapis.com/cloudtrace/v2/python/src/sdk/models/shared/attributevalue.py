from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import truncatablestring


@dataclass_json
@dataclass
class AttributeValue:
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boolValue' }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intValue' }})
    string_value: Optional[truncatablestring.TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
