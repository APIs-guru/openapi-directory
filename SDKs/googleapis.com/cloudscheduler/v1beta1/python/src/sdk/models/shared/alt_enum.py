from dataclasses import dataclass, field
from enum import Enum

class AltEnum(str, Enum):
    JSON = "json"
    MEDIA = "media"
    PROTO = "proto"

