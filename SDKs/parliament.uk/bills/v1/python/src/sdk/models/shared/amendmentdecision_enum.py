from dataclasses import dataclass, field
from typing import Enum

class AmendmentDecisionEnum(str, Enum):
    NO_DECISION = "NoDecision"
    WITHDRAWN = "Withdrawn"
    DISAGREED = "Disagreed"
    NOT_MOVED = "NotMoved"
    AGREED = "Agreed"

