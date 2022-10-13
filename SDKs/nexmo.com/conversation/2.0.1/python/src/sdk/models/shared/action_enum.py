from dataclasses import dataclass, field
from typing import Enum

class ActionEnum(str, Enum):
    START = "start"
    STOP = "stop"

