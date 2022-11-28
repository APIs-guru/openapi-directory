from dataclasses import dataclass, field
from enum import Enum

class TemporalEnum(str, Enum):
    DAY = "day"
    MONTH = "month"
    YEAR = "year"
    MOY = "moy"
    DOW = "dow"
    HOUR = "hour"
    HOD = "hod"

