from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import conditionvalue

class BooleanConditionTypeEnum(str, Enum):
    CONDITION_TYPE_UNSPECIFIED = "CONDITION_TYPE_UNSPECIFIED"
    NUMBER_GREATER = "NUMBER_GREATER"
    NUMBER_GREATER_THAN_EQ = "NUMBER_GREATER_THAN_EQ"
    NUMBER_LESS = "NUMBER_LESS"
    NUMBER_LESS_THAN_EQ = "NUMBER_LESS_THAN_EQ"
    NUMBER_EQ = "NUMBER_EQ"
    NUMBER_NOT_EQ = "NUMBER_NOT_EQ"
    NUMBER_BETWEEN = "NUMBER_BETWEEN"
    NUMBER_NOT_BETWEEN = "NUMBER_NOT_BETWEEN"
    TEXT_CONTAINS = "TEXT_CONTAINS"
    TEXT_NOT_CONTAINS = "TEXT_NOT_CONTAINS"
    TEXT_STARTS_WITH = "TEXT_STARTS_WITH"
    TEXT_ENDS_WITH = "TEXT_ENDS_WITH"
    TEXT_EQ = "TEXT_EQ"
    TEXT_IS_EMAIL = "TEXT_IS_EMAIL"
    TEXT_IS_URL = "TEXT_IS_URL"
    DATE_EQ = "DATE_EQ"
    DATE_BEFORE = "DATE_BEFORE"
    DATE_AFTER = "DATE_AFTER"
    DATE_ON_OR_BEFORE = "DATE_ON_OR_BEFORE"
    DATE_ON_OR_AFTER = "DATE_ON_OR_AFTER"
    DATE_BETWEEN = "DATE_BETWEEN"
    DATE_NOT_BETWEEN = "DATE_NOT_BETWEEN"
    DATE_IS_VALID = "DATE_IS_VALID"
    ONE_OF_RANGE = "ONE_OF_RANGE"
    ONE_OF_LIST = "ONE_OF_LIST"
    BLANK = "BLANK"
    NOT_BLANK = "NOT_BLANK"
    CUSTOM_FORMULA = "CUSTOM_FORMULA"
    BOOLEAN = "BOOLEAN"
    TEXT_NOT_EQ = "TEXT_NOT_EQ"
    DATE_NOT_EQ = "DATE_NOT_EQ"


@dataclass_json
@dataclass
class BooleanCondition:
    type: Optional[BooleanConditionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    values: Optional[List[conditionvalue.ConditionValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
