from dataclasses import dataclass, field
from typing import Enum

class RequestStatusEnum(str, Enum):
    PENDING = "PENDING"
    PROCESSING = "PROCESSING"
    SUCCESS = "SUCCESS"
    ABORTED = "ABORTED"
    FAILED = "FAILED"
    TRUNCATED = "TRUNCATED"

