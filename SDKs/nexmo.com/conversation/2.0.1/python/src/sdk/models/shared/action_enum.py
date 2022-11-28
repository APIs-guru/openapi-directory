from dataclasses import dataclass, field
from enum import Enum

class ActionEnum(str, Enum):
    START = "start"
    STOP = "stop"

