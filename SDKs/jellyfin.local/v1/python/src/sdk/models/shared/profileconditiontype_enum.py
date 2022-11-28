from dataclasses import dataclass, field
from typing import Any
from enum import Enum

class ProfileConditionTypeEnum(str, Enum):
    EQUALS = "Equals"
    NOT_EQUALS = "NotEquals"
    LESS_THAN_EQUAL = "LessThanEqual"
    GREATER_THAN_EQUAL = "GreaterThanEqual"
    EQUALS_ANY = "EqualsAny"

