from dataclasses import dataclass, field
from typing import Enum

class IdentifierTypeEnum(str, Enum):
    MOBILE = "MOBILE"
    MR = "MR"

