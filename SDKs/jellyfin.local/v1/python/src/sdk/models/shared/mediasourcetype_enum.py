from dataclasses import dataclass, field
from typing import Enum

class MediaSourceTypeEnum(str, Enum):
    DEFAULT = "Default"
    GROUPING = "Grouping"
    PLACEHOLDER = "Placeholder"

