from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConstraintViolationConstraintTypeEnum(str, Enum):
    MUST_BE_FALSE = "MUST_BE_FALSE"
    MUST_BE_TRUE = "MUST_BE_TRUE"
    MUST_BE_LESS_THAN = "MUST_BE_LESS_THAN"
    MUST_BE_GREATER_THAN = "MUST_BE_GREATER_THAN"
    DIGIT_OUT_OF_BOUNDS = "DIGIT_OUT_OF_BOUNDS"
    DATE_MUST_BE_IN_THE_FUTURE = "DATE_MUST_BE_IN_THE_FUTURE"
    MUST_BE_LESS_OR_EQUAL_THAN = "MUST_BE_LESS_OR_EQUAL_THAN"
    MUST_BE_GREATER_OR_EQUAL_TO = "MUST_BE_GREATER_OR_EQUAL_TO"
    MUST_NOT_BE_NULL = "MUST_NOT_BE_NULL"
    MUST_BE_NULL = "MUST_BE_NULL"
    DATE_MUST_BE_IN_THE_PAST = "DATE_MUST_BE_IN_THE_PAST"
    MUST_MATCH_PATTERN = "MUST_MATCH_PATTERN"
    INVALID_SIZE = "INVALID_SIZE"
    INVALID_EMAIL = "INVALID_EMAIL"
    MUST_NOT_BE_EMPTY = "MUST_NOT_BE_EMPTY"
    INVALID_RANGE = "INVALID_RANGE"
    UNKNOWN = "UNKNOWN"


@dataclass_json
@dataclass
class ConstraintViolation:
    constraint_type: Optional[ConstraintViolationConstraintTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraintType') }})
    developer_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMessage') }})
    expected: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expected') }})
    property_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyName') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
