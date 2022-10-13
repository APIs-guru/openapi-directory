from dataclasses import dataclass, field
from typing import Enum

class CodecTypeEnum(str, Enum):
    VIDEO = "Video"
    VIDEO_AUDIO = "VideoAudio"
    AUDIO = "Audio"

