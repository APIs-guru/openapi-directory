from dataclasses import dataclass, field
from enum import Enum

class ObExternalLimitType1CodeEnum(str, Enum):
    AVAILABLE = "Available"
    CREDIT = "Credit"
    EMERGENCY = "Emergency"
    PRE_AGREED = "Pre-Agreed"
    TEMPORARY = "Temporary"

