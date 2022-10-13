from dataclasses import dataclass, field
from typing import Enum

class SubscriptionStatusEnum(str, Enum):
    GRANTED = "GRANTED"
    DENIED = "DENIED"

