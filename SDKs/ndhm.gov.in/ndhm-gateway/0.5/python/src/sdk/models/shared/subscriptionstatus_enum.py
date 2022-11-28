from dataclasses import dataclass, field
from enum import Enum

class SubscriptionStatusEnum(str, Enum):
    GRANTED = "GRANTED"
    DENIED = "DENIED"

