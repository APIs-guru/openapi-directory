from dataclasses import dataclass, field
from enum import Enum

class JurisdictionClassificationEnum(str, Enum):
    STATE = "state"
    MUNICIPALITY = "municipality"
    COUNTRY = "country"

