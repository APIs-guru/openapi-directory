from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hl7schemaconfig
from . import hl7typesconfig

class SchemaPackageSchematizedParsingTypeEnum(str, Enum):
    SCHEMATIZED_PARSING_TYPE_UNSPECIFIED = "SCHEMATIZED_PARSING_TYPE_UNSPECIFIED"
    SOFT_FAIL = "SOFT_FAIL"
    HARD_FAIL = "HARD_FAIL"

class SchemaPackageUnexpectedSegmentHandlingEnum(str, Enum):
    UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED = "UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED"
    FAIL = "FAIL"
    SKIP = "SKIP"
    PARSE = "PARSE"


@dataclass_json
@dataclass
class SchemaPackage:
    ignore_min_occurs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreMinOccurs' }})
    schemas: Optional[List[hl7schemaconfig.Hl7SchemaConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    schematized_parsing_type: Optional[SchemaPackageSchematizedParsingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schematizedParsingType' }})
    types: Optional[List[hl7typesconfig.Hl7TypesConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    unexpected_segment_handling: Optional[SchemaPackageUnexpectedSegmentHandlingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unexpectedSegmentHandling' }})
    
