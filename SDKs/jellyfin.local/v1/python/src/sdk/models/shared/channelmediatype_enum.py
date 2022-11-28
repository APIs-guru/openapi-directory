from dataclasses import dataclass, field
from enum import Enum

class ChannelMediaTypeEnum(str, Enum):
    AUDIO = "Audio"
    VIDEO = "Video"
    PHOTO = "Photo"

