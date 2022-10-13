from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import type
from . import structtype

class TypeCodeEnum(str, Enum):
    TYPE_CODE_UNSPECIFIED = "TYPE_CODE_UNSPECIFIED"
    BOOL = "BOOL"
    INT64 = "INT64"
    FLOAT64 = "FLOAT64"
    TIMESTAMP = "TIMESTAMP"
    DATE = "DATE"
    STRING = "STRING"
    BYTES = "BYTES"
    ARRAY = "ARRAY"
    STRUCT = "STRUCT"
    NUMERIC = "NUMERIC"
    JSON = "JSON"

class TypeTypeAnnotationEnum(str, Enum):
    TYPE_ANNOTATION_CODE_UNSPECIFIED = "TYPE_ANNOTATION_CODE_UNSPECIFIED"
    PG_NUMERIC = "PG_NUMERIC"
    PG_JSONB = "PG_JSONB"


@dataclass_json
@dataclass
class Type:
    array_element_type: Optional[type.Type] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayElementType' }})
    code: Optional[TypeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    struct_type: Optional[structtype.StructType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structType' }})
    type_annotation: Optional[TypeTypeAnnotationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeAnnotation' }})
    
