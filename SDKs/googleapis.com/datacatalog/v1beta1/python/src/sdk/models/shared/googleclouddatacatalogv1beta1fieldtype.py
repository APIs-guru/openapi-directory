from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1fieldtypeenumtype

class GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum(str, Enum):
    PRIMITIVE_TYPE_UNSPECIFIED = "PRIMITIVE_TYPE_UNSPECIFIED"
    DOUBLE = "DOUBLE"
    STRING = "STRING"
    BOOL = "BOOL"
    TIMESTAMP = "TIMESTAMP"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1FieldType:
    enum_type: Optional[googleclouddatacatalogv1beta1fieldtypeenumtype.GoogleCloudDatacatalogV1beta1FieldTypeEnumType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumType' }})
    primitive_type: Optional[GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primitiveType' }})
    
