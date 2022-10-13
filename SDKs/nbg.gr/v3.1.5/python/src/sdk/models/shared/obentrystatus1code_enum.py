from dataclasses import dataclass, field
from typing import Enum

class ObEntryStatus1CodeEnum(str, Enum):
    BOOKED = "Booked"
    PENDING = "Pending"

