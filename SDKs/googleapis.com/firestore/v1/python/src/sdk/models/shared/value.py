from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import arrayvalue
from . import latlng
from . import mapvalue

class ValueNullValueEnum(str, Enum):
    NULL_VALUE = "NULL_VALUE"


@dataclass_json
@dataclass
class Value:
    array_value: Optional[arrayvalue.ArrayValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayValue' }})
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanValue' }})
    bytes_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bytesValue' }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    geo_point_value: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoPointValue' }})
    integer_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerValue' }})
    map_value: Optional[mapvalue.MapValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapValue' }})
    null_value: Optional[ValueNullValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nullValue' }})
    reference_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    timestamp_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampValue' }})
    
