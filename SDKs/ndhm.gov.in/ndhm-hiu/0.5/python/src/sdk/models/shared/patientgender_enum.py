from dataclasses import dataclass, field
from typing import Enum

class PatientGenderEnum(str, Enum):
    M = "M"
    F = "F"
    O = "O"
    U = "U"

