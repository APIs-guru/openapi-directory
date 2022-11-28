from dataclasses import dataclass, field
from enum import Enum

class TransactionStatusEnum(str, Enum):
    ACCC = "ACCC"
    ACCP = "ACCP"
    ACSC = "ACSC"
    ACSP = "ACSP"
    ACTC = "ACTC"
    ACWC = "ACWC"
    ACWP = "ACWP"
    RCVD = "RCVD"
    PDNG = "PDNG"
    RJCT = "RJCT"
    CANC = "CANC"
    ACFC = "ACFC"
    PATC = "PATC"
    PART = "PART"

