from dataclasses import dataclass, field
from enum import Enum

class TaskCompletionStatusEnum(str, Enum):
    COMPLETED = "Completed"
    FAILED = "Failed"
    CANCELLED = "Cancelled"
    ABORTED = "Aborted"

