from dataclasses import dataclass, field
from enum import Enum

class TimePeriodEnum(str, Enum):
    ONE = "1"
    SEVEN = "7"
    THIRTY = "30"

