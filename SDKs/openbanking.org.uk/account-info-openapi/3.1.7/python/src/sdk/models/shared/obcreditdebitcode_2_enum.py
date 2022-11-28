from dataclasses import dataclass, field
from enum import Enum

class ObCreditDebitCode2Enum(str, Enum):
    CREDIT = "Credit"
    DEBIT = "Debit"

