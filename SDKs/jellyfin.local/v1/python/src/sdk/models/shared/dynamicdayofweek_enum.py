from dataclasses import dataclass, field
from typing import Enum

class DynamicDayOfWeekEnum(str, Enum):
    SUNDAY = "Sunday"
    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"
    SATURDAY = "Saturday"
    EVERYDAY = "Everyday"
    WEEKDAY = "Weekday"
    WEEKEND = "Weekend"

