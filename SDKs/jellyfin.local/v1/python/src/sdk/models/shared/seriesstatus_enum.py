from dataclasses import dataclass, field
from enum import Enum

class SeriesStatusEnum(str, Enum):
    CONTINUING = "Continuing"
    ENDED = "Ended"

