from dataclasses import dataclass, field
from typing import Enum

class OriginatingHouseEnum(str, Enum):
    ALL = "All"
    COMMONS = "Commons"
    LORDS = "Lords"

