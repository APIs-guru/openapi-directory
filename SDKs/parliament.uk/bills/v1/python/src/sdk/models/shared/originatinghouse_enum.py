from dataclasses import dataclass, field
from enum import Enum

class OriginatingHouseEnum(str, Enum):
    ALL = "All"
    COMMONS = "Commons"
    LORDS = "Lords"

