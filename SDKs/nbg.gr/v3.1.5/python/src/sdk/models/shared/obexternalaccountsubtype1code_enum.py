from dataclasses import dataclass, field
from enum import Enum

class ObExternalAccountSubType1CodeEnum(str, Enum):
    CHARGE_CARD = "ChargeCard"
    CREDIT_CARD = "CreditCard"
    CURRENT_ACCOUNT = "CurrentAccount"
    E_MONEY = "EMoney"
    LOAN = "Loan"
    MORTGAGE = "Mortgage"
    PRE_PAID_CARD = "PrePaidCard"
    SAVINGS = "Savings"

