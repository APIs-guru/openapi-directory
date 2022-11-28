from dataclasses import dataclass, field
from enum import Enum

class SpatialEnum(str, Enum):
    COUNTRY = "country"
    LOCATION = "location"
    PROJECT = "project"
    TOTAL = "total"

