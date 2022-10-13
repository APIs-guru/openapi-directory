from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    data_type: Optional[ObjectTokenDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
