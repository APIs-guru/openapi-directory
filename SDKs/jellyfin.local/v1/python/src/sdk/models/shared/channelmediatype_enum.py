from dataclasses import dataclass, field
from typing import Enum

class ChannelMediaTypeEnum(str, Enum):
    AUDIO = "Audio"
    VIDEO = "Video"
    PHOTO = "Photo"

