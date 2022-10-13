from dataclasses import dataclass, field
from typing import Enum

class MetadataRefreshModeEnum(str, Enum):
    NONE = "None"
    VALIDATION_ONLY = "ValidationOnly"
    DEFAULT = "Default"
    FULL_REFRESH = "FullRefresh"

