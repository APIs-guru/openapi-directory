from dataclasses import dataclass, field
from typing import Enum

class SpatialEnum(str, Enum):
    COUNTRY = "country"
    LOCATION = "location"
    PROJECT = "project"
    TOTAL = "total"

