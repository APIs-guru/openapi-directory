from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""ValidationOptions
    Options for how to validate and process properties on a resource.
    """
    
    schema_validation: Optional[ValidationOptionsSchemaValidationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaValidation') }})
    undeclared_properties: Optional[ValidationOptionsUndeclaredPropertiesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('undeclaredProperties') }})
    
