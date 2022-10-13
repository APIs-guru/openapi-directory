from dataclasses import dataclass, field
from typing import Enum

class ObBalanceType1CodeEnum(str, Enum):
    CLOSING_AVAILABLE = "ClosingAvailable"
    CLOSING_BOOKED = "ClosingBooked"
    CLOSING_CLEARED = "ClosingCleared"
    EXPECTED = "Expected"
    FORWARD_AVAILABLE = "ForwardAvailable"
    INFORMATION = "Information"
    INTERIM_AVAILABLE = "InterimAvailable"
    INTERIM_BOOKED = "InterimBooked"
    INTERIM_CLEARED = "InterimCleared"
    OPENING_AVAILABLE = "OpeningAvailable"
    OPENING_BOOKED = "OpeningBooked"
    OPENING_CLEARED = "OpeningCleared"
    PREVIOUSLY_CLOSED_BOOKED = "PreviouslyClosedBooked"

