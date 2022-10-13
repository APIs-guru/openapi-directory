from dataclasses import dataclass, field
from typing import Enum

class DeviceProfileTypeEnum(str, Enum):
    SYSTEM = "System"
    USER = "User"

