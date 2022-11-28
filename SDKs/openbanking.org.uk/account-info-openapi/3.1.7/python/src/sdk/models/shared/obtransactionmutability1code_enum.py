from dataclasses import dataclass, field
from enum import Enum

class ObTransactionMutability1CodeEnum(str, Enum):
    MUTABLE = "Mutable"
    IMMUTABLE = "Immutable"

