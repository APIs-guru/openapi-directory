from dataclasses import dataclass, field
from typing import Enum

class BillTypeCategoryEnum(str, Enum):
    PUBLIC = "Public"
    PRIVATE = "Private"
    HYBRID = "Hybrid"

