from dataclasses import dataclass, field
from enum import Enum

class CodecTypeEnum(str, Enum):
    VIDEO = "Video"
    VIDEO_AUDIO = "VideoAudio"
    AUDIO = "Audio"

