from dataclasses import dataclass, field
from typing import Enum

class JurisdictionClassificationEnum(str, Enum):
    STATE = "state"
    MUNICIPALITY = "municipality"
    COUNTRY = "country"

