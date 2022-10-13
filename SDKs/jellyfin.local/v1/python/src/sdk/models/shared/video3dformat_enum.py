from dataclasses import dataclass, field
from typing import Enum

class Video3DFormatEnum(str, Enum):
    HALF_SIDE_BY_SIDE = "HalfSideBySide"
    FULL_SIDE_BY_SIDE = "FullSideBySide"
    FULL_TOP_AND_BOTTOM = "FullTopAndBottom"
    HALF_TOP_AND_BOTTOM = "HalfTopAndBottom"
    MVC = "MVC"

