from dataclasses import dataclass, field
from typing import Enum

class FrequencyCodeEnum(str, Enum):
    DAILY = "Daily"
    WEEKLY = "Weekly"
    EVERY_TWO_WEEKS = "EveryTwoWeeks"
    MONTHLY = "Monthly"
    EVERY_TWO_MONTHS = "EveryTwoMonths"
    QUARTERLY = "Quarterly"
    SEMI_ANNUAL = "SemiAnnual"
    ANNUAL = "Annual"
    MONTHLY_VARIABLE = "MonthlyVariable"

