from dataclasses import dataclass, field
from typing import Enum

class AsrStatusEnum(str, Enum):
    OK = "ok"
    ERROR = "error"

