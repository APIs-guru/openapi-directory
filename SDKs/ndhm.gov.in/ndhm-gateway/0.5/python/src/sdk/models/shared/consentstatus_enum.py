from dataclasses import dataclass, field
from enum import Enum

class ConsentStatusEnum(str, Enum):
    GRANTED = "GRANTED"
    EXPIRED = "EXPIRED"
    DENIED = "DENIED"
    REQUESTED = "REQUESTED"
    REVOKED = "REVOKED"

