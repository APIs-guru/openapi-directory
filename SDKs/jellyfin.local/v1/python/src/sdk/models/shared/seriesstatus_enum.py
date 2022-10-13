from dataclasses import dataclass, field
from typing import Enum

class SeriesStatusEnum(str, Enum):
    CONTINUING = "Continuing"
    ENDED = "Ended"

