from dataclasses import dataclass, field
from enum import Enum

class BillTypeCategoryEnum(str, Enum):
    PUBLIC = "Public"
    PRIVATE = "Private"
    HYBRID = "Hybrid"

