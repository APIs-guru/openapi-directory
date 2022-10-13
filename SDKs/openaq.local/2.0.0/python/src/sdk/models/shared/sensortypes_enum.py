from dataclasses import dataclass, field
from typing import Enum

class SensorTypesEnum(str, Enum):
    REFERENCE_GRADE = "reference grade"
    LOW_COST_SENSOR = "low-cost sensor"

