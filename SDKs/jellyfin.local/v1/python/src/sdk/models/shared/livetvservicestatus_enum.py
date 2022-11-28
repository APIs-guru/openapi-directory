from dataclasses import dataclass, field
from enum import Enum

class LiveTvServiceStatusEnum(str, Enum):
    OK = "Ok"
    UNAVAILABLE = "Unavailable"

