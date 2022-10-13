from dataclasses import dataclass, field
from typing import Enum

class TransactionStatusSbsEnum(str, Enum):
    ACSC = "ACSC"
    ACTC = "ACTC"
    PATC = "PATC"
    RCVD = "RCVD"
    RJCT = "RJCT"
    CANC = "CANC"

