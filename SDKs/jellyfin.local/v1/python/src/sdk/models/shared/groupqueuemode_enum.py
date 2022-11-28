from dataclasses import dataclass, field
from enum import Enum

class GroupQueueModeEnum(str, Enum):
    QUEUE = "Queue"
    QUEUE_NEXT = "QueueNext"

