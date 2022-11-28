from dataclasses import dataclass, field
from enum import Enum

class MemberStateEnum(str, Enum):
    INVITED = "invited"
    JOINED = "joined"
    LEFT = "left"
    UNKNOWN = "unknown"

