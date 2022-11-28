from dataclasses import dataclass, field
from enum import Enum

class RatingTypeEnum(str, Enum):
    SCORE = "Score"
    LIKES = "Likes"

