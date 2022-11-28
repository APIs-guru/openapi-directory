from dataclasses import dataclass, field
from enum import Enum

class DlnaProfileTypeEnum(str, Enum):
    AUDIO = "Audio"
    VIDEO = "Video"
    PHOTO = "Photo"

