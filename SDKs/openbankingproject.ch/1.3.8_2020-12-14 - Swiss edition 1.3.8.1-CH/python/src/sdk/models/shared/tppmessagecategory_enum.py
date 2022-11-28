from dataclasses import dataclass, field
from enum import Enum

class TppMessageCategoryEnum(str, Enum):
    ERROR = "ERROR"
    WARNING = "WARNING"

