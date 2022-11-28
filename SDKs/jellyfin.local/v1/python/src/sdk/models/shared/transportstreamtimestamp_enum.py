from dataclasses import dataclass, field
from enum import Enum

class TransportStreamTimestampEnum(str, Enum):
    NONE = "None"
    ZERO = "Zero"
    VALID = "Valid"

