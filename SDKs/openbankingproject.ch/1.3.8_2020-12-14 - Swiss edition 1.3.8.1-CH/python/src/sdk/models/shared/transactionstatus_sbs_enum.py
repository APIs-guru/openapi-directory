from dataclasses import dataclass, field
from enum import Enum

class TransactionStatusSbsEnum(str, Enum):
    ACSC = "ACSC"
    ACTC = "ACTC"
    PATC = "PATC"
    RCVD = "RCVD"
    RJCT = "RJCT"
    CANC = "CANC"

