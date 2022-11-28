from dataclasses import dataclass, field
from enum import Enum

class SubtitlePlaybackModeEnum(str, Enum):
    DEFAULT = "Default"
    ALWAYS = "Always"
    ONLY_FORCED = "OnlyForced"
    NONE = "None"
    SMART = "Smart"

