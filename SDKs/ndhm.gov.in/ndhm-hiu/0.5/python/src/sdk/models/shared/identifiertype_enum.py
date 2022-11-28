from dataclasses import dataclass, field
from enum import Enum

class IdentifierTypeEnum(str, Enum):
    MOBILE = "MOBILE"
    MR = "MR"
    NDHM_HEALTH_NUMBER = "NDHM_HEALTH_NUMBER"
    HEALTH_ID = "HEALTH_ID"

