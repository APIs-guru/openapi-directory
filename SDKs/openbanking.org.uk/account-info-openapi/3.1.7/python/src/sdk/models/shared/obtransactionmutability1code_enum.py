from dataclasses import dataclass, field
from typing import Enum

class ObTransactionMutability1CodeEnum(str, Enum):
    MUTABLE = "Mutable"
    IMMUTABLE = "Immutable"

