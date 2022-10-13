from dataclasses import dataclass, field
from typing import Enum

class DecisionEnum(str, Enum):
    ALL = "All"
    NO_DECISION = "NoDecision"
    WITHDRAWN = "Withdrawn"
    DISAGREED = "Disagreed"
    NOT_MOVED = "NotMoved"
    AGREED = "Agreed"

