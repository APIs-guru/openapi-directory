from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""SchemaPackage
    A schema package contains a set of schemas and type definitions.
    """
    
    ignore_min_occurs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreMinOccurs') }})
    schemas: Optional[List[Hl7SchemaConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    schematized_parsing_type: Optional[SchemaPackageSchematizedParsingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schematizedParsingType') }})
    types: Optional[List[Hl7TypesConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    unexpected_segment_handling: Optional[SchemaPackageUnexpectedSegmentHandlingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedSegmentHandling') }})
    
