from dataclasses import dataclass, field
from typing import Enum

class IsoTypeEnum(str, Enum):
    DVD = "Dvd"
    BLU_RAY = "BluRay"

