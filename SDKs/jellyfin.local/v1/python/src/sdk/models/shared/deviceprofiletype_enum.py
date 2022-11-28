from dataclasses import dataclass, field
from enum import Enum

class DeviceProfileTypeEnum(str, Enum):
    SYSTEM = "System"
    USER = "User"

