from dataclasses import dataclass, field
from typing import Enum

class PatientAuthPurposeEnum(str, Enum):
    LINK = "LINK"
    KYC = "KYC"
    KYC_AND_LINK = "KYC_AND_LINK"

