from dataclasses import dataclass, field
from enum import Enum

class ObExternalPartyType1CodeEnum(str, Enum):
    DELEGATE = "Delegate"
    JOINT = "Joint"
    SOLE = "Sole"

