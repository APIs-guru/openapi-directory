from dataclasses import dataclass, field
from enum import Enum

class NotificationLevelEnum(str, Enum):
    NORMAL = "Normal"
    WARNING = "Warning"
    ERROR = "Error"

