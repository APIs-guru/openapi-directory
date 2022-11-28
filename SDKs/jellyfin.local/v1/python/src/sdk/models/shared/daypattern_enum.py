from dataclasses import dataclass, field
from enum import Enum

class DayPatternEnum(str, Enum):
    DAILY = "Daily"
    WEEKDAYS = "Weekdays"
    WEEKENDS = "Weekends"

