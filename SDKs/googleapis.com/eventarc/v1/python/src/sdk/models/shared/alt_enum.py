from dataclasses import dataclass, field
from typing import Enum

class AltEnum(str, Enum):
    JSON = "json"
    MEDIA = "media"
    PROTO = "proto"

