from dataclasses import dataclass, field
from typing import Enum

class PlayAccessEnum(str, Enum):
    FULL = "Full"
    NONE = "None"

