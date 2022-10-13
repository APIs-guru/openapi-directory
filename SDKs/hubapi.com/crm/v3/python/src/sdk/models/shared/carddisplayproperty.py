from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import displayoption

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
    data_type: CardDisplayPropertyDataTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: List[displayoption.DisplayOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    
