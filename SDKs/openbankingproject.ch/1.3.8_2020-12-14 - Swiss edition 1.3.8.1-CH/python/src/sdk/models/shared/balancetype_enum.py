from dataclasses import dataclass, field
from typing import Enum

class BalanceTypeEnum(str, Enum):
    CLOSING_BOOKED = "closingBooked"
    EXPECTED = "expected"
    OPENING_BOOKED = "openingBooked"
    INTERIM_AVAILABLE = "interimAvailable"
    INTERIM_BOOKED = "interimBooked"
    FORWARD_AVAILABLE = "forwardAvailable"
    NON_INVOICED = "nonInvoiced"

