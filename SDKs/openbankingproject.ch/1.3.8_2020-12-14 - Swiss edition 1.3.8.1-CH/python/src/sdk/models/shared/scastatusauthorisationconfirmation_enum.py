from dataclasses import dataclass, field
from enum import Enum

class ScaStatusAuthorisationConfirmationEnum(str, Enum):
    FINALISED = "finalised"
    FAILED = "failed"

