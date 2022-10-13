from dataclasses import dataclass, field
from typing import Enum

class FFmpegLocationEnum(str, Enum):
    NOT_FOUND = "NotFound"
    SET_BY_ARGUMENT = "SetByArgument"
    CUSTOM = "Custom"
    SYSTEM = "System"

