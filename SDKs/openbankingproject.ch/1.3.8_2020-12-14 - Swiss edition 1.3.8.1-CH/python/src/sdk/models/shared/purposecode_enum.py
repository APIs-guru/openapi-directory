from dataclasses import dataclass, field
from typing import Enum

class PurposeCodeEnum(str, Enum):
    SALA = "SALA"
    PENS = "PENS"

