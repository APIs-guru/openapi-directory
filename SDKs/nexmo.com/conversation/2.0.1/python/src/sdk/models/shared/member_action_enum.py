from dataclasses import dataclass, field
from typing import Enum

class MemberActionEnum(str, Enum):
    INVITE = "invite"
    JOIN = "join"

