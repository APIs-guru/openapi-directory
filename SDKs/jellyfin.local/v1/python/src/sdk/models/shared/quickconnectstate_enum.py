from dataclasses import dataclass, field
from enum import Enum

class QuickConnectStateEnum(str, Enum):
    UNAVAILABLE = "Unavailable"
    AVAILABLE = "Available"
    ACTIVE = "Active"

