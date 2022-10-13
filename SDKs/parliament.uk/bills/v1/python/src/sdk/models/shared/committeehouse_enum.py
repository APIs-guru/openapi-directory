from dataclasses import dataclass, field
from typing import Enum

class CommitteeHouseEnum(str, Enum):
    COMMONS = "Commons"
    LORDS = "Lords"
    JOINT = "Joint"

