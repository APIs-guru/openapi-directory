from dataclasses import dataclass, field
from typing import Enum

class ObExternalPartyType1CodeEnum(str, Enum):
    DELEGATE = "Delegate"
    JOINT = "Joint"
    SOLE = "Sole"

