from dataclasses import dataclass, field
from typing import Enum

class DirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

