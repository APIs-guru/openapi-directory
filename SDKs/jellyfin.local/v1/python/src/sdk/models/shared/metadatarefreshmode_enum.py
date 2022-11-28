from dataclasses import dataclass, field
from enum import Enum

class MetadataRefreshModeEnum(str, Enum):
    NONE = "None"
    VALIDATION_ONLY = "ValidationOnly"
    DEFAULT = "Default"
    FULL_REFRESH = "FullRefresh"

