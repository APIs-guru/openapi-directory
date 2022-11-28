from dataclasses import dataclass, field
from enum import Enum

class OrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

