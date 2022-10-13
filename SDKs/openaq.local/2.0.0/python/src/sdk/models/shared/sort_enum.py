from dataclasses import dataclass, field
from typing import Enum

class SortEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

