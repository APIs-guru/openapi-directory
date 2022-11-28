from dataclasses import dataclass, field
from enum import Enum

class MessageCode405PisCancEnum(str, Enum):
    CANCELLATION_INVALID = "CANCELLATION_INVALID"
    SERVICE_INVALID = "SERVICE_INVALID"

