from dataclasses import dataclass, field
from typing import Enum

class MediaStreamTypeEnum(str, Enum):
    AUDIO = "Audio"
    VIDEO = "Video"
    SUBTITLE = "Subtitle"
    EMBEDDED_IMAGE = "EmbeddedImage"

