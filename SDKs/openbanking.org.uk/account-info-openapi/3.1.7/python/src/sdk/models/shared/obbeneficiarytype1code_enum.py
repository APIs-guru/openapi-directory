from dataclasses import dataclass, field
from enum import Enum

class ObBeneficiaryType1CodeEnum(str, Enum):
    TRUSTED = "Trusted"
    ORDINARY = "Ordinary"

