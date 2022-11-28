from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CardDisplayPropertyDataTypeEnum(str, Enum):
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
class CardDisplayProperty:
    r"""CardDisplayProperty
    Definition for a card display property.
    """
    
    data_type: CardDisplayPropertyDataTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: List[DisplayOption] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
