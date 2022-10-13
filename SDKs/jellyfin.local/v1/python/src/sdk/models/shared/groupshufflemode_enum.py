from dataclasses import dataclass, field
from typing import Enum

class GroupShuffleModeEnum(str, Enum):
    SORTED = "Sorted"
    SHUFFLE = "Shuffle"

