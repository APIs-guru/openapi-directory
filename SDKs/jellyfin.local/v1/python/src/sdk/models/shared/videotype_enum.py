from dataclasses import dataclass, field
from enum import Enum

class VideoTypeEnum(str, Enum):
    VIDEO_FILE = "VideoFile"
    ISO = "Iso"
    DVD = "Dvd"
    BLU_RAY = "BluRay"

