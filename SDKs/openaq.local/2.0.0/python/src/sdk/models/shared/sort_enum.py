from dataclasses import dataclass, field
from enum import Enum

class SortEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

