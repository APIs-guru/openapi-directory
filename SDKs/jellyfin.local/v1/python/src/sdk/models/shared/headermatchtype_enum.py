from dataclasses import dataclass, field
from enum import Enum

class HeaderMatchTypeEnum(str, Enum):
    EQUALS = "Equals"
    REGEX = "Regex"
    SUBSTRING = "Substring"

