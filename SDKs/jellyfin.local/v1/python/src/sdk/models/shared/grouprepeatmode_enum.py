from dataclasses import dataclass, field
from enum import Enum

class GroupRepeatModeEnum(str, Enum):
    REPEAT_ONE = "RepeatOne"
    REPEAT_ALL = "RepeatAll"
    REPEAT_NONE = "RepeatNone"

