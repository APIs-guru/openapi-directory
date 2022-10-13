from dataclasses import dataclass, field
from typing import Enum

class ObCreditDebitCodeEnum(str, Enum):
    CREDIT = "Credit"
    DEBIT = "Debit"

