from dataclasses import dataclass, field
from typing import Enum

class DlnaProfileTypeEnum(str, Enum):
    AUDIO = "Audio"
    VIDEO = "Video"
    PHOTO = "Photo"

