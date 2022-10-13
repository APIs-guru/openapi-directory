from dataclasses import dataclass, field
from typing import Enum

class CommitteeClassificationEnum(str, Enum):
    COMMITTEE = "committee"
    SUBCOMMITTEE = "subcommittee"

