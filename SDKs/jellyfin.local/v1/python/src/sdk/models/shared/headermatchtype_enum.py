from dataclasses import dataclass, field
from typing import Enum

class HeaderMatchTypeEnum(str, Enum):
    EQUALS = "Equals"
    REGEX = "Regex"
    SUBSTRING = "Substring"

