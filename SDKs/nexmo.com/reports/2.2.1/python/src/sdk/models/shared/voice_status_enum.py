from dataclasses import dataclass, field
from typing import Enum

class VoiceStatusEnum(str, Enum):
    STARTED = "started"
    RINGING = "ringing"
    ANSWERED = "answered"
    MACHINE = "machine"
    COMPLETED = "completed"
    TIMEOUT = "timeout"
    FAILED = "failed"
    REJECTED = "rejected"
    CANCELLED = "cancelled"
    BUSY = "busy"

