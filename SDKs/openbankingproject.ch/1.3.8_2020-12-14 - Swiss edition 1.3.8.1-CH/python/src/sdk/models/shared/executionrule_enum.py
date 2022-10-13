from dataclasses import dataclass, field
from typing import Enum

class ExecutionRuleEnum(str, Enum):
    FOLLOWING = "following"
    PRECEDING = "preceding"

