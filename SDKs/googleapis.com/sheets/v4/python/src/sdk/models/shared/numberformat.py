from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NumberFormatTypeEnum(str, Enum):
    NUMBER_FORMAT_TYPE_UNSPECIFIED = "NUMBER_FORMAT_TYPE_UNSPECIFIED"
    TEXT = "TEXT"
    NUMBER = "NUMBER"
    PERCENT = "PERCENT"
    CURRENCY = "CURRENCY"
    DATE = "DATE"
    TIME = "TIME"
    DATE_TIME = "DATE_TIME"
    SCIENTIFIC = "SCIENTIFIC"


@dataclass_json
@dataclass
class NumberFormat:
    pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pattern' }})
    type: Optional[NumberFormatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
