from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class DataTypeFieldFormatEnum(str, Enum):
    INTEGER = "integer"
    FLOAT_POINT = "floatPoint"
    STRING = "string"
    MAP = "map"
    INTEGER_LIST = "integerList"
    FLOAT_LIST = "floatList"
    BLOB = "blob"


@dataclass_json
@dataclass
class DataTypeField:
    format: Optional[DataTypeFieldFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    optional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optional' }})
    
