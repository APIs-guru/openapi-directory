from dataclasses import dataclass, field
from typing import Enum

class PlaylistVisibilityFieldEnum(str, Enum):
    PUBLIC = "public"
    UNLISTED = "unlisted"
    PRIVATE = "private"

