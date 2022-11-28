from dataclasses import dataclass, field
from enum import Enum

class ObAccountStatus1CodeEnum(str, Enum):
    DELETED = "Deleted"
    DISABLED = "Disabled"
    ENABLED = "Enabled"
    PENDING = "Pending"
    PRO_FORMA = "ProForma"

