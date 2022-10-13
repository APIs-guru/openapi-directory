from dataclasses import dataclass, field
from typing import Enum

class ChannelTypeEnum(str, Enum):
    TV = "TV"
    RADIO = "Radio"

