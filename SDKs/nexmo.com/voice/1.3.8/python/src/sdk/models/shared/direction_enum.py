from dataclasses import dataclass, field
from typing import Enum

class DirectionEnum(str, Enum):
    OUTBOUND = "outbound"
    INBOUND = "inbound"

