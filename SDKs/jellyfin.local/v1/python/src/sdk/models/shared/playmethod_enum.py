from dataclasses import dataclass, field
from typing import Enum

class PlayMethodEnum(str, Enum):
    TRANSCODE = "Transcode"
    DIRECT_STREAM = "DirectStream"
    DIRECT_PLAY = "DirectPlay"

