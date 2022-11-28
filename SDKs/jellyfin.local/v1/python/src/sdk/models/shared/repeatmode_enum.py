from dataclasses import dataclass, field
from enum import Enum

class RepeatModeEnum(str, Enum):
    REPEAT_NONE = "RepeatNone"
    REPEAT_ALL = "RepeatAll"
    REPEAT_ONE = "RepeatOne"

