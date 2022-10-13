from dataclasses import dataclass, field
from typing import Enum

class CommitteeIncludeEnum(str, Enum):
    MEMBERSHIPS = "memberships"
    LINKS = "links"
    SOURCES = "sources"

