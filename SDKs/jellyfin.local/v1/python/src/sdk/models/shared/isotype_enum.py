from dataclasses import dataclass, field
from enum import Enum

class IsoTypeEnum(str, Enum):
    DVD = "Dvd"
    BLU_RAY = "BluRay"

