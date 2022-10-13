from dataclasses import dataclass, field
from typing import Enum

class ProximityEnum(str, Enum):
    FAR = "far"
    NEAR = "near"
    IMMEDIATE = "immediate"

