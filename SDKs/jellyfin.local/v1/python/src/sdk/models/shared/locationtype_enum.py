from dataclasses import dataclass, field
from enum import Enum

class LocationTypeEnum(str, Enum):
    FILE_SYSTEM = "FileSystem"
    REMOTE = "Remote"
    VIRTUAL = "Virtual"
    OFFLINE = "Offline"

