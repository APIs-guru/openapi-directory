from dataclasses import dataclass, field
from typing import Enum

class TaskStateEnum(str, Enum):
    IDLE = "Idle"
    CANCELLING = "Cancelling"
    RUNNING = "Running"

