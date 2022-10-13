from dataclasses import dataclass, field
from typing import Enum

class RecordingStatusEnum(str, Enum):
    NEW = "New"
    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    CANCELLED = "Cancelled"
    CONFLICTED_OK = "ConflictedOk"
    CONFLICTED_NOT_OK = "ConflictedNotOk"
    ERROR = "Error"

