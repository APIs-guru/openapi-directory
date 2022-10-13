from dataclasses import dataclass, field
from typing import Enum

class PluginStatusEnum(str, Enum):
    ACTIVE = "Active"
    RESTART = "Restart"
    DELETED = "Deleted"
    SUPERCEDED = "Superceded"
    MALFUNCTIONED = "Malfunctioned"
    NOT_SUPPORTED = "NotSupported"
    DISABLED = "Disabled"

