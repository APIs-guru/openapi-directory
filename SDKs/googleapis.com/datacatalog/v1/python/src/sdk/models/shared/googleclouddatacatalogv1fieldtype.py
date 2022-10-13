from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1fieldtypeenumtype

class GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum(str, Enum):
    PRIMITIVE_TYPE_UNSPECIFIED = "PRIMITIVE_TYPE_UNSPECIFIED"
    DOUBLE = "DOUBLE"
    STRING = "STRING"
    BOOL = "BOOL"
    TIMESTAMP = "TIMESTAMP"
    RICHTEXT = "RICHTEXT"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1FieldType:
    enum_type: Optional[googleclouddatacatalogv1fieldtypeenumtype.GoogleCloudDatacatalogV1FieldTypeEnumType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumType' }})
    primitive_type: Optional[GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primitiveType' }})
    
