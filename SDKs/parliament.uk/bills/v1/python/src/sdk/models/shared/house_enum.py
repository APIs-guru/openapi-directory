from dataclasses import dataclass, field
from enum import Enum

class HouseEnum(str, Enum):
    ALL = "All"
    COMMONS = "Commons"
    LORDS = "Lords"
    UNASSIGNED = "Unassigned"

