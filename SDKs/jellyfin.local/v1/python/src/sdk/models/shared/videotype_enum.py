from dataclasses import dataclass, field
from typing import Enum

class VideoTypeEnum(str, Enum):
    VIDEO_FILE = "VideoFile"
    ISO = "Iso"
    DVD = "Dvd"
    BLU_RAY = "BluRay"

