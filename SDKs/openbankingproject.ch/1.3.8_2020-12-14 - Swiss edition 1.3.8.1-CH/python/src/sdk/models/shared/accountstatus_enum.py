from dataclasses import dataclass, field
from typing import Enum

class AccountStatusEnum(str, Enum):
    ENABLED = "enabled"
    DELETED = "deleted"
    BLOCKED = "blocked"

