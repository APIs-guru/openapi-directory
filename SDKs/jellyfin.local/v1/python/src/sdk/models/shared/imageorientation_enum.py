from dataclasses import dataclass, field
from enum import Enum

class ImageOrientationEnum(str, Enum):
    TOP_LEFT = "TopLeft"
    TOP_RIGHT = "TopRight"
    BOTTOM_RIGHT = "BottomRight"
    BOTTOM_LEFT = "BottomLeft"
    LEFT_TOP = "LeftTop"
    RIGHT_TOP = "RightTop"
    RIGHT_BOTTOM = "RightBottom"
    LEFT_BOTTOM = "LeftBottom"

