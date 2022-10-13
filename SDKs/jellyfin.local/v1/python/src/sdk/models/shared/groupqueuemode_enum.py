from dataclasses import dataclass, field
from typing import Enum

class GroupQueueModeEnum(str, Enum):
    QUEUE = "Queue"
    QUEUE_NEXT = "QueueNext"

