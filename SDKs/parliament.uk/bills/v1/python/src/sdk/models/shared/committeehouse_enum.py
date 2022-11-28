from dataclasses import dataclass, field
from enum import Enum

class CommitteeHouseEnum(str, Enum):
    COMMONS = "Commons"
    LORDS = "Lords"
    JOINT = "Joint"

