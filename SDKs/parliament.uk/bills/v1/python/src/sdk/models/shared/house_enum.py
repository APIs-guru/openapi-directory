from dataclasses import dataclass, field
from typing import Enum

class HouseEnum(str, Enum):
    ALL = "All"
    COMMONS = "Commons"
    LORDS = "Lords"
    UNASSIGNED = "Unassigned"

