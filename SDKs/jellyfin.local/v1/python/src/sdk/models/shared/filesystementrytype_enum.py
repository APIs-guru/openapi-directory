from dataclasses import dataclass, field
from typing import Enum

class FileSystemEntryTypeEnum(str, Enum):
    FILE = "File"
    DIRECTORY = "Directory"
    NETWORK_COMPUTER = "NetworkComputer"
    NETWORK_SHARE = "NetworkShare"

