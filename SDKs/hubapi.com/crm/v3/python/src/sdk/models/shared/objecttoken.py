from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ObjectTokenDataTypeEnum(str, Enum):
    BOOLEAN = "BOOLEAN"
    CURRENCY = "CURRENCY"
    DATE = "DATE"
    DATETIME = "DATETIME"
    EMAIL = "EMAIL"
    LINK = "LINK"
    NUMERIC = "NUMERIC"
    STRING = "STRING"
    STATUS = "STATUS"


@dataclass_json
@dataclass
class ObjectToken:
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    data_type: Optional[ObjectTokenDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
