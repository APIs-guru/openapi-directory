from dataclasses import dataclass, field
from enum import Enum

class ResponseFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"

