from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ValidationOptionsSchemaValidationEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    IGNORE = "IGNORE"
    IGNORE_WITH_WARNINGS = "IGNORE_WITH_WARNINGS"
    FAIL = "FAIL"

class ValidationOptionsUndeclaredPropertiesEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    INCLUDE = "INCLUDE"
    IGNORE = "IGNORE"
    INCLUDE_WITH_WARNINGS = "INCLUDE_WITH_WARNINGS"
    IGNORE_WITH_WARNINGS = "IGNORE_WITH_WARNINGS"
    FAIL = "FAIL"


@dataclass_json
@dataclass
class ValidationOptions:
    schema_validation: Optional[ValidationOptionsSchemaValidationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaValidation' }})
    undeclared_properties: Optional[ValidationOptionsUndeclaredPropertiesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'undeclaredProperties' }})
    
