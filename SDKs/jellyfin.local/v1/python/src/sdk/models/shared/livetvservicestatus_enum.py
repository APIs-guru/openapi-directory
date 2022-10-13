from dataclasses import dataclass, field
from typing import Enum

class LiveTvServiceStatusEnum(str, Enum):
    OK = "Ok"
    UNAVAILABLE = "Unavailable"

