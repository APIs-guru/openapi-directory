from dataclasses import dataclass, field
from enum import Enum

class GroupShuffleModeEnum(str, Enum):
    SORTED = "Sorted"
    SHUFFLE = "Shuffle"

