from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Type
    `Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query.
    """
    
    array_element_type: Optional[Type] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayElementType') }})
    code: Optional[TypeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    struct_type: Optional[StructType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structType') }})
    type_annotation: Optional[TypeTypeAnnotationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeAnnotation') }})
    
