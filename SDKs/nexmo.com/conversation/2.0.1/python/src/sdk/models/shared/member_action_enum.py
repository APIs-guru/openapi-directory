from dataclasses import dataclass, field
from enum import Enum

class MemberActionEnum(str, Enum):
    INVITE = "invite"
    JOIN = "join"

