from dataclasses import dataclass, field
from typing import Enum

class TaskCompletionStatusEnum(str, Enum):
    COMPLETED = "Completed"
    FAILED = "Failed"
    CANCELLED = "Cancelled"
    ABORTED = "Aborted"

