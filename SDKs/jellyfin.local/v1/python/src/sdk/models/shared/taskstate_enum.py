from dataclasses import dataclass, field
from enum import Enum

class TaskStateEnum(str, Enum):
    IDLE = "Idle"
    CANCELLING = "Cancelling"
    RUNNING = "Running"

