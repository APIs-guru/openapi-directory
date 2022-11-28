from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""NumberFormat
    The number format of a cell.
    """
    
    pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pattern') }})
    type: Optional[NumberFormatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
