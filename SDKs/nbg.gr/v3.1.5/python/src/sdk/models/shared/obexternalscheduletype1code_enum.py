from dataclasses import dataclass, field
from typing import Enum

class ObExternalScheduleType1CodeEnum(str, Enum):
    ARRIVAL = "Arrival"
    EXECUTION = "Execution"

