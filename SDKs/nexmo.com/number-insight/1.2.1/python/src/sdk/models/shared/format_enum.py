from dataclasses import dataclass, field
from enum import Enum

class FormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"

