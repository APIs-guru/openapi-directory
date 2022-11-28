from dataclasses import dataclass, field
from enum import Enum

class PlaystateCommandEnum(str, Enum):
    STOP = "Stop"
    PAUSE = "Pause"
    UNPAUSE = "Unpause"
    NEXT_TRACK = "NextTrack"
    PREVIOUS_TRACK = "PreviousTrack"
    SEEK = "Seek"
    REWIND = "Rewind"
    FAST_FORWARD = "FastForward"
    PLAY_PAUSE = "PlayPause"

