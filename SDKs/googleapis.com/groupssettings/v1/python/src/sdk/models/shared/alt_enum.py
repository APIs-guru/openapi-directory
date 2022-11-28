from dataclasses import dataclass, field
from enum import Enum

class AltEnum(str, Enum):
    ATOM = "atom"
    JSON = "json"

