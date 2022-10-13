from dataclasses import dataclass, field
from typing import Enum

class ScrollDirectionEnum(str, Enum):
    HORIZONTAL = "Horizontal"
    VERTICAL = "Vertical"

