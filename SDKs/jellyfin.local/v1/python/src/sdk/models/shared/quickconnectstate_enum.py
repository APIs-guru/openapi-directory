from dataclasses import dataclass, field
from typing import Enum

class QuickConnectStateEnum(str, Enum):
    UNAVAILABLE = "Unavailable"
    AVAILABLE = "Available"
    ACTIVE = "Active"

