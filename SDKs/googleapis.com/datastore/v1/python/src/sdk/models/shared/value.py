from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import arrayvalue
from . import entity
from . import latlng
from . import key

class ValueNullValueEnum(str, Enum):
    NULL_VALUE = "NULL_VALUE"


@dataclass_json
@dataclass
class Value:
    array_value: Optional[arrayvalue.ArrayValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayValue' }})
    blob_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blobValue' }})
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanValue' }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    entity_value: Optional[entity.Entity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityValue' }})
    exclude_from_indexes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeFromIndexes' }})
    geo_point_value: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoPointValue' }})
    integer_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerValue' }})
    key_value: Optional[key.Key] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValue' }})
    meaning: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meaning' }})
    null_value: Optional[ValueNullValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nullValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    timestamp_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampValue' }})
    
