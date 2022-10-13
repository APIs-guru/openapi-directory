from dataclasses import dataclass, field
from typing import Enum

class OrderEnum(str, Enum):
    ASC_LOWER = "asc"
    DESC_LOWER = "desc"
    ASC_UPPER = "ASC"
    DESC_UPPER = "DESC"

