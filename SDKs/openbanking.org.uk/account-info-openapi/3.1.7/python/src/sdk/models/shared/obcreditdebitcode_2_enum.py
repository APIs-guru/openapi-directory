from dataclasses import dataclass, field
from typing import Enum

class ObCreditDebitCode2Enum(str, Enum):
    CREDIT = "Credit"
    DEBIT = "Debit"

