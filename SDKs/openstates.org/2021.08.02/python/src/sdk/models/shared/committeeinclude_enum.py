from dataclasses import dataclass, field
from enum import Enum

class CommitteeIncludeEnum(str, Enum):
    MEMBERSHIPS = "memberships"
    LINKS = "links"
    SOURCES = "sources"

