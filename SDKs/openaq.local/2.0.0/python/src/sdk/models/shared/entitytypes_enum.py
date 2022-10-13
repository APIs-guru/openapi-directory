from dataclasses import dataclass, field
from typing import Enum

class EntityTypesEnum(str, Enum):
    GOVERNMENT = "government"
    COMMUNITY = "community"
    RESEARCH = "research"

