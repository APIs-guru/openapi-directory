from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum(str, Enum):
    PRIMITIVE_TYPE_UNSPECIFIED = "PRIMITIVE_TYPE_UNSPECIFIED"
    DOUBLE = "DOUBLE"
    STRING = "STRING"
    BOOL = "BOOL"
    TIMESTAMP = "TIMESTAMP"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1FieldType:
    enum_type: Optional[GoogleCloudDatacatalogV1beta1FieldTypeEnumType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumType') }})
    primitive_type: Optional[GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primitiveType') }})
    
