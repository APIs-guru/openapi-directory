from dataclasses import dataclass, field
from typing import Enum

class ConsentStatusEnum(str, Enum):
    GRANTED = "GRANTED"
    EXPIRED = "EXPIRED"
    DENIED = "DENIED"
    REQUESTED = "REQUESTED"
    REVOKED = "REVOKED"

