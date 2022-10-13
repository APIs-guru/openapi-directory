from dataclasses import dataclass, field
from typing import Enum

class MemberStateEnum(str, Enum):
    INVITED = "invited"
    JOINED = "joined"
    LEFT = "left"
    UNKNOWN = "unknown"

