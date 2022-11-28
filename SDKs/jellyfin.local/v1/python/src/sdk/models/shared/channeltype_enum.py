from dataclasses import dataclass, field
from enum import Enum

class ChannelTypeEnum(str, Enum):
    TV = "TV"
    RADIO = "Radio"

