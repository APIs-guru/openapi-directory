from dataclasses import dataclass, field
from typing import Enum

class LocationTypeEnum(str, Enum):
    FILE_SYSTEM = "FileSystem"
    REMOTE = "Remote"
    VIRTUAL = "Virtual"
    OFFLINE = "Offline"

