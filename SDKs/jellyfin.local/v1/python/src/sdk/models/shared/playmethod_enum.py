from dataclasses import dataclass, field
from enum import Enum

class PlayMethodEnum(str, Enum):
    TRANSCODE = "Transcode"
    DIRECT_STREAM = "DirectStream"
    DIRECT_PLAY = "DirectPlay"

