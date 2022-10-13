from dataclasses import dataclass, field
from typing import Enum

class UnitOfMeasureEnum(str, Enum):
    MG = "mg"
    G = "g"
    KG = "kg"
    GR = "gr"
    OZ = "oz"
    TOZ = "toz"
    CT = "ct"
    DWT = "dwt"

