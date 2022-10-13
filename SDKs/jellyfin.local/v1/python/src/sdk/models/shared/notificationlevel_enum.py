from dataclasses import dataclass, field
from typing import Enum

class NotificationLevelEnum(str, Enum):
    NORMAL = "Normal"
    WARNING = "Warning"
    ERROR = "Error"

