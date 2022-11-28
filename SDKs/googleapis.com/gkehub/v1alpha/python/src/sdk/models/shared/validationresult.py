from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ValidationResultValidatorEnum(str, Enum):
    VALIDATOR_TYPE_UNSPECIFIED = "VALIDATOR_TYPE_UNSPECIFIED"
    MEMBERSHIP_ID = "MEMBERSHIP_ID"
    CROSS_PROJECT_PERMISSION = "CROSS_PROJECT_PERMISSION"


@dataclass_json
@dataclass
class ValidationResult:
    r"""ValidationResult
    ValidationResults are results set by each validator running during ValidateCreateMembership.
    """
    
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    validator: Optional[ValidationResultValidatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validator') }})
    
