from dataclasses import dataclass, field
from enum import Enum

class DirectionEnum(str, Enum):
    OUTBOUND = "outbound"
    INBOUND = "inbound"

