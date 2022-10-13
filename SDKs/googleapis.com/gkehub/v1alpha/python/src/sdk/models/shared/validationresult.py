from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ValidationResultValidatorEnum(str, Enum):
    VALIDATOR_TYPE_UNSPECIFIED = "VALIDATOR_TYPE_UNSPECIFIED"
    MEMBERSHIP_ID = "MEMBERSHIP_ID"
    CROSS_PROJECT_PERMISSION = "CROSS_PROJECT_PERMISSION"


@dataclass_json
@dataclass
class ValidationResult:
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    validator: Optional[ValidationResultValidatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validator' }})
    
