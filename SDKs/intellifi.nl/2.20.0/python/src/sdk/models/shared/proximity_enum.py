from dataclasses import dataclass, field
from enum import Enum

class ProximityEnum(str, Enum):
    FAR = "far"
    NEAR = "near"
    IMMEDIATE = "immediate"

