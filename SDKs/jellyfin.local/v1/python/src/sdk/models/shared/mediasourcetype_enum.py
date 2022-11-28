from dataclasses import dataclass, field
from enum import Enum

class MediaSourceTypeEnum(str, Enum):
    DEFAULT = "Default"
    GROUPING = "Grouping"
    PLACEHOLDER = "Placeholder"

