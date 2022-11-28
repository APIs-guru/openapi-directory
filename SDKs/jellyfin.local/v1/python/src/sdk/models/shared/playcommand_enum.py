from dataclasses import dataclass, field
from enum import Enum

class PlayCommandEnum(str, Enum):
    PLAY_NOW = "PlayNow"
    PLAY_NEXT = "PlayNext"
    PLAY_LAST = "PlayLast"
    PLAY_INSTANT_MIX = "PlayInstantMix"
    PLAY_SHUFFLE = "PlayShuffle"

