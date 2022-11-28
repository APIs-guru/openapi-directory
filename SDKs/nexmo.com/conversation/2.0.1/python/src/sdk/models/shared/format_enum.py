from dataclasses import dataclass, field
from enum import Enum

class FormatEnum(str, Enum):
    MP3 = "mp3"
    WAV = "wav"

