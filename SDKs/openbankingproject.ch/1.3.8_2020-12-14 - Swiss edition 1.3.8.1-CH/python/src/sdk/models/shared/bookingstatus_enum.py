from dataclasses import dataclass, field
from typing import Enum

class BookingStatusEnum(str, Enum):
    INFORMATION = "information"
    BOOKED = "booked"
    PENDING = "pending"
    BOTH = "both"

