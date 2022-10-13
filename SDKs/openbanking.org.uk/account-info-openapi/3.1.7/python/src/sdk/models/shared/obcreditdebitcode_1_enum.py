from dataclasses import dataclass, field
from typing import Enum

class ObCreditDebitCode1Enum(str, Enum):
    CREDIT = "Credit"
    DEBIT = "Debit"

