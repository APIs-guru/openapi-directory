from dataclasses import dataclass, field
from typing import Enum

class GroupRepeatModeEnum(str, Enum):
    REPEAT_ONE = "RepeatOne"
    REPEAT_ALL = "RepeatAll"
    REPEAT_NONE = "RepeatNone"

