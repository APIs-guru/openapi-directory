from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnumValuePair:
    integer_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
