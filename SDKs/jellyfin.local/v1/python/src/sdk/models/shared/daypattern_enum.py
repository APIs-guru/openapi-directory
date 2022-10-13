from dataclasses import dataclass, field
from typing import Enum

class DayPatternEnum(str, Enum):
    DAILY = "Daily"
    WEEKDAYS = "Weekdays"
    WEEKENDS = "Weekends"

