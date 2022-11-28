from dataclasses import dataclass, field
from enum import Enum

class ObEntryStatus1CodeEnum(str, Enum):
    BOOKED = "Booked"
    PENDING = "Pending"

