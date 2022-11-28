from dataclasses import dataclass, field
from enum import Enum

class LocationRuleTypeEnum(str, Enum):
    ALLOW = "allow"
    DISALLOW = "disallow"
    DISAPPEARED = "disappeared"
    DEBOUNCE = "debounce"

