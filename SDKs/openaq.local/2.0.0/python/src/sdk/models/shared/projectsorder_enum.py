from dataclasses import dataclass, field
from typing import Enum

class ProjectsOrderEnum(str, Enum):
    ID = "id"
    NAME = "name"
    SUBTITLE = "subtitle"
    FIRST_UPDATED = "firstUpdated"
    LAST_UPDATED = "lastUpdated"

