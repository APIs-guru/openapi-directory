from dataclasses import dataclass, field
from enum import Enum

class CommitteeClassificationEnum(str, Enum):
    COMMITTEE = "committee"
    SUBCOMMITTEE = "subcommittee"

