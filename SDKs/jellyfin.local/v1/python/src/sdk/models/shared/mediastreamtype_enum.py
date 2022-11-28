from dataclasses import dataclass, field
from enum import Enum

class MediaStreamTypeEnum(str, Enum):
    AUDIO = "Audio"
    VIDEO = "Video"
    SUBTITLE = "Subtitle"
    EMBEDDED_IMAGE = "EmbeddedImage"

