from dataclasses import dataclass, field
from typing import Enum

class FormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"

