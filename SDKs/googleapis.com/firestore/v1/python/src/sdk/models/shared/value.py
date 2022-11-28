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
    A message that can hold any of the supported value types.
    """
    
    array_value: Optional[ArrayValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayValue') }})
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanValue') }})
    bytes_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytesValue') }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    geo_point_value: Optional[LatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoPointValue') }})
    integer_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerValue') }})
    map_value: Optional[MapValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapValue') }})
    null_value: Optional[ValueNullValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nullValue') }})
    reference_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    timestamp_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampValue') }})
    
