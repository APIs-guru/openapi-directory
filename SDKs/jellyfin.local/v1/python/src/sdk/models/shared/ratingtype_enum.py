from dataclasses import dataclass, field
from typing import Enum

class RatingTypeEnum(str, Enum):
    SCORE = "Score"
    LIKES = "Likes"

