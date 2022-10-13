from dataclasses import dataclass, field
from typing import Enum

class MessageCode405PisCancEnum(str, Enum):
    CANCELLATION_INVALID = "CANCELLATION_INVALID"
    SERVICE_INVALID = "SERVICE_INVALID"

