from dataclasses import dataclass, field
from typing import Enum

class GroupStateTypeEnum(str, Enum):
    IDLE = "Idle"
    WAITING = "Waiting"
    PAUSED = "Paused"
    PLAYING = "Playing"

