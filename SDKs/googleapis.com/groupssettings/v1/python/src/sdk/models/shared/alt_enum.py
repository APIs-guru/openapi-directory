from dataclasses import dataclass, field
from typing import Enum

class AltEnum(str, Enum):
    ATOM = "atom"
    JSON = "json"

