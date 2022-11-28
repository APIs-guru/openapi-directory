from dataclasses import dataclass, field
from enum import Enum

class ProgramAudioEnum(str, Enum):
    MONO = "Mono"
    STEREO = "Stereo"
    DOLBY = "Dolby"
    DOLBY_DIGITAL = "DolbyDigital"
    THX = "Thx"
    ATMOS = "Atmos"

