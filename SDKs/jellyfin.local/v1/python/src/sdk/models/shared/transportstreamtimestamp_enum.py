from dataclasses import dataclass, field
from typing import Enum

class TransportStreamTimestampEnum(str, Enum):
    NONE = "None"
    ZERO = "Zero"
    VALID = "Valid"

