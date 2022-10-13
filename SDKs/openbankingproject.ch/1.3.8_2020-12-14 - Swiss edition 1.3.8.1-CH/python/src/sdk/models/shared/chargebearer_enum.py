from dataclasses import dataclass, field
from typing import Enum

class ChargeBearerEnum(str, Enum):
    DEBT = "DEBT"
    CRED = "CRED"
    SHAR = "SHAR"
    SLEV = "SLEV"

