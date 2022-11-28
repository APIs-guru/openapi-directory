from dataclasses import dataclass, field
from enum import Enum

class ObCreditDebitCode1Enum(str, Enum):
    CREDIT = "Credit"
    DEBIT = "Debit"

