from dataclasses import dataclass, field
from typing import Enum

class ObBeneficiaryType1CodeEnum(str, Enum):
    TRUSTED = "Trusted"
    ORDINARY = "Ordinary"

