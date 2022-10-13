from dataclasses import dataclass, field
from typing import Enum

class PaymentServiceEnum(str, Enum):
    PAYMENTS = "payments"
    BULK_PAYMENTS = "bulk-payments"
    PERIODIC_PAYMENTS = "periodic-payments"

