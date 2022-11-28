from dataclasses import dataclass, field
from enum import Enum

class PlayAccessEnum(str, Enum):
    FULL = "Full"
    NONE = "None"

