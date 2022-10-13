from dataclasses import dataclass, field
from typing import Enum

class ScaStatusAuthorisationConfirmationEnum(str, Enum):
    FINALISED = "finalised"
    FAILED = "failed"

