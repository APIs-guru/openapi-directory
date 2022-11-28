from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ValueNullValueEnum(str, Enum):
    NULL_VALUE = "NULL_VALUE"


@dataclass_json
@dataclass
class Value:
    r"""Value
    A message that can hold any of the supported value types and associated metadata.
    """
    
    array_value: Optional[ArrayValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayValue') }})
    blob_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobValue') }})
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanValue') }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    entity_value: Optional[Entity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityValue') }})
    exclude_from_indexes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeFromIndexes') }})
    geo_point_value: Optional[LatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoPointValue') }})
    integer_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerValue') }})
    key_value: Optional[Key] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValue') }})
    meaning: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meaning') }})
    null_value: Optional[ValueNullValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nullValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    timestamp_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampValue') }})
    
