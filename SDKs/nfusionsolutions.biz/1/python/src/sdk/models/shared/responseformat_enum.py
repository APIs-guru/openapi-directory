from dataclasses import dataclass, field
from typing import Enum

class ResponseFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"

