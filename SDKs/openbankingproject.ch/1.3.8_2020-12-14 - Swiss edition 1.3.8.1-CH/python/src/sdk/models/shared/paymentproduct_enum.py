from dataclasses import dataclass, field
from typing import Enum

class PaymentProductEnum(str, Enum):
    DOMESTIC_SWISS_CREDIT_TRANSFERS_ISR = "domestic-swiss-credit-transfers-isr"
    DOMESTIC_SWISS_CREDIT_TRANSFERS = "domestic-swiss-credit-transfers"
    DOMESTIC_SWISS_CREDIT_TRANSFERS_QR = "domestic-swiss-credit-transfers-qr"
    DOMESTIC_SWISS_FOREIGN_CREDIT_TRANSFERS = "domestic-swiss-foreign-credit-transfers"
    SWISS_SEPA_CREDIT_TRANSFERS = "swiss-sepa-credit-transfers"
    SWISS_CROSS_BORDER_CREDIT_TRANSFERS = "swiss-cross-border-credit-transfers"
    PAIN_001_SEPA_CREDIT_TRANSFERS = "pain.001-sepa-credit-transfers"
    PAIN_001_CROSS_BORDER_CREDIT_TRANSFERS = "pain.001-cross-border-credit-transfers"
    PAIN_001_SWISS_SIX_CREDIT_TRANSFERS = "pain.001-swiss-six-credit-transfers"

