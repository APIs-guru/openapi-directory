from dataclasses import dataclass, field
from typing import Enum

class OrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

