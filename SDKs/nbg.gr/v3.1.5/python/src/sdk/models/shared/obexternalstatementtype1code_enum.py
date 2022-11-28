from dataclasses import dataclass, field
from enum import Enum

class ObExternalStatementType1CodeEnum(str, Enum):
    ACCOUNT_CLOSURE = "AccountClosure"
    ACCOUNT_OPENING = "AccountOpening"
    ANNUAL = "Annual"
    INTERIM = "Interim"
    REGULAR_PERIODIC = "RegularPeriodic"

