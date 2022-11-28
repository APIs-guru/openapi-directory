from dataclasses import dataclass, field
from enum import Enum

class ObExternalScheduleType1CodeEnum(str, Enum):
    ARRIVAL = "Arrival"
    EXECUTION = "Execution"

