from dataclasses import dataclass, field
from typing import Enum

class TppMessageCategoryEnum(str, Enum):
    ERROR = "ERROR"
    WARNING = "WARNING"

